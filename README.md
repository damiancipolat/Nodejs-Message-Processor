# Message processor
Examples and techniques of how to create a nodejs message processor through a permanent socket.

**Chapter list:**

- **[Model I]**
- **[Model II]**
- **[Model III]**
- **[Model IV]**

[Model I]:https://github.com/damiancipolat/Node-MSG-Processor#model-i
[Model II]:https://github.com/damiancipolat/Node-MSG-Processor#model-2
[Model III]:https://github.com/damiancipolat/Node-MSG-Processor#model-3
[Model IV]:https://github.com/damiancipolat/Node-MSG-Processor#model-4

## Model I:
A single process with a server that receive and process the messages.

**Stress test:**
Process done with 3k messages.

![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-1.png?raw=true)

**To run:**
```js
$ cd model-1
$ npm install
$ npm start
```

## Model 2:
A single process with a server that receive and process the messages.

**Stress test:**
Process done with 6k messages.

![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-2.png?raw=true)

**To run:**
```js
$ cd model-2
$ npm install
$ npm run server
$ npm run client
```

## Model 3:
A model defined, that is ready to scale horizontal. This model use the model II with a load balancer in the front, this module have a particular beahaviour, function as an apirest that return a url of one server that is defined in his server list.

**Stress test:**
Process done with 10k messages.

![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-3.png?raw=true)

**To run:**
```js
$ cd model-3
#To start server in a port.
$ npm run server 8080

#To start client, define server url and amount of request.
$ npm run client 100 http://localhost:8080
```

### Using custom socket balancer:

![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-4.png?raw=true)

**To run:**
```js
$ cd model-3
#To start client
$ npm run client

#To start server
$ npm run server

#To start balancer
$ npm run balancer
```
## Model 4:
**Using NGINX as socket balancer**, This show how to use NGINX as socket load balancer. In productive environemts, I thinks that use NGINX is the best option instead of use my example of the previouse example, because is a very eficient and confiable product so is a good option to use in every project. 

### Diagram:
![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-5.png?raw=true)

### Basic example: (client / NGINX /  Server) without load balancer.
This example create a Nodejs socket server listen connections in the port **8081** and set the NGINX in the middle receiving connections in the port 8000 and by pass them to the port 8081, for other hand there are a client process that sent data to nginx. Pleas thake a look at the file nginx.conf

**nginx.conf**
```js
...
stream {
    server {
      listen 8000;
      proxy_pass 127.0.0.1:8081;
      proxy_protocol on;
    }
}
```

**To run:**
```js
$ cd model-4/basic
#To start server
$ pm2 start server.js

#To start nginx
$ sudo systemctl restart nginx

#To start client
$ npm run client

#To view process running
$ pm2 list
```
