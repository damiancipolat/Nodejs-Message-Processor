#Run node.js server - Instance 1
pm2 start server.js --node-args="8080" --name="SERVER 1"

#Run node.js server - Instance 2
pm2 start server.js --node-args="8081" --name="SERVER 2"

#Run node.js server - Instance 3
pm2 start server.js --node-args="8082" --name="SERVER 3"