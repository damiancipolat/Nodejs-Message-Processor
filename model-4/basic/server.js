const net  = require('net');
const host = '127.0.0.1';

//Get port from console.
const port = ((process.argv.length==4)&&(process.argv[2]=='--port'))?process.argv[3]:8081;

const server = net.createServer();
let  sockets = [];

//ON LISTEN.
const onListen = () => {

  console.log('TCP Server is running on port ' + port + '.');

}

//ON CONNECTION.
const onConnection = (sock) => {

  console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

  //Save the socket in the array.
  sockets.push(sock);

  sock.on('data', (data)=>{

      console.log('DATA ' + sock.remoteAddress + ': ' + data);

      // Write the data back to all the connected, the client will receive it as data from the server
      sockets.forEach((sock, index, array)=>{
          sock.write(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
      });

  });

  // Add a 'close' event handler to this instance of socket
  sock.on('close', (data)=>{

      let index = sockets.findIndex((o)=>{
          return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
      })

      if (index !== -1) sockets.splice(index, 1);

      console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);

  });

}

//Start listen server.
server.listen(port, host, onListen);

//When a connection is received.
server.on('connection', onConnection);
