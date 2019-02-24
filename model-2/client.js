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

try{

  //Connect to socket io.
  socket = io.connect(url);

  //Start socket events.
  socket.on('connect', ()=>{

    console.log('> Client connected');

    //If there are console parameter.
    if (process.argv.length===3){

      let amount = process.argv[2];

      //Send massive amount of messages.
      sendMassive(amount,socket);

    } else {    
      console.log('Missing run parameter, format: node client.js [CMD] [NUMBER]');
      process.exit();
    }

    console.log('Process finished!');

  });

} catch(err){
  console.log('Error',err);
}