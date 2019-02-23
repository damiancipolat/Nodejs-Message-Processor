//Module dependencies.
const io     = require("socket.io-client");
const moment = require('moment');

let socket   = null;
const url    = "http://localhost:8000";

//Generate the mock.
const getMock = ()=>{

  //Generate random data and from the timestamp.
  let timestamp  = moment().format("dddMMYYYYhhmmssa");
  let value = Math.floor(Math.random()*100)+1;
  let unix = moment().unix();

  return {
    date:'DATA-'+timestamp,
    value: 'BODY-'+value,
    timestamp:unix
  }

}

//Send a lot of mock messages.
const sendMassive = (MAX,socket)=>{

  console.log('> Sending '+MAX+' consecutive messages.');

  for (let i=0;i<=MAX;i++){
    let mock = getMock();
    socket.emit('test',mock);
  }

}

//Send a big a mount data in one messages.
const sendBig = (MAX,socket)=>{

  console.log('> Sending '+MAX+' all together');

  let payload = [];

  //Make a big package.
  for (let i=0;i<=MAX;i++){
    payload.push(getMock());
  }

  //Send it.
  socket.emit('test',payload);

}

//Playground.
const run = ()=>{

  //If there are console parameter.
  if (process.argv.length===4){

    let arg    = process.argv[2];
    let amount = process.argv[3];

    //Process the command.
    switch(arg){
      case 'massive':{
        sendMassive(amount,socket);
        break;
      }       
      case 'big':{
        sendBig(amount,socket);        
        break;
      }
    }

  } else {    
    console.log('Missing run parameter, format: node client.js [CMD] [NUMBER]');
    process.exit();
  }

}

try{

  //Connect to socket io.
  socket = io.connect(url);

  //Start socket events.
  socket.on('connect', ()=>{

    console.log('> Client connected');

    socket.on("seq-num", (msg) => {
      console.info('Received',msg);
    });

    //Run script.
    run();
    console.log('Process finished!');
    

  });

} catch(err){
  console.log('Error',err);
}