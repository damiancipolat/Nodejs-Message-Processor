const io     = require("socket.io");
const server = io.listen(8000);

let sequenceNumberByClient = new Map();
let msgCounter = 0;

// event fired every time a new client connects:
server.on("connection", (socket) => {

  console.info(`Client connected [id=${socket.id}]`);
  
  // initialize this client's sequence number
  sequenceNumberByClient.set(socket, 1);

  socket.on('test', (data)=>{
    msgCounter++;
    console.log('>',msgCounter,'value',data);
  });

  // when socket disconnects, remove it from the list:
  socket.on("disconnect", () => {
    sequenceNumberByClient.delete(socket);
    console.info(`Client gone [id=${socket.id}]`);
  });

});