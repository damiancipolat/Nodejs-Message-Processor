//Include api modules.
const http       = require('http');
const express    = require('express');
const bodyParser = require('body-parser');

//Include config file.
const config     = require('config');

//Start Express-js
const app    = express();
const server = http.createServer(app);

//Add bodyparser and CORS.
app.use(bodyParser.json());

//Start listen mode.
app.listen(config.server.port,config.server.ip,()=>{
  console.log('Load balancer running!');
});

//Get a server from the list.
app.get('/get-server',(req,res,next)=>{

  let algo = config.get('algorigthm');
  console.log(111);
});

//Get the all list of server.
app.get('/list',(req,res,next)=>{ 
  res.status(200).json(config.get('list'));
});

//Health route.
app.get('/health',(req,res)=>{
  res.status(200).json({"status":"ok"});
});

app.get('*',(req,res)=>{
  res.status(400).json({"error":"bad request"});
});


const onError = (err)=>{
  console.log('error',err);
}

//Handle process server.
process.on('SIGTERM', onError);
process.on('SIGINT',  onError)
process.on('uncaughtException', onError);