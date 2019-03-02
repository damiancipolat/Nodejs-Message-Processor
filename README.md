# Message processor
Examples and techniques of how to create a nodejs message processor through a permanent socket.

**Chapter list:**

- **[Model I]**
- **[Model II]**
- **[Model III]**
- **[Custom socket balancer]**
- **[NGINX socket balancer]**

[Model I]:https://github.com/damiancipolat/Node-MSG-Processor#model-i
[Model II]:https://github.com/damiancipolat/Node-MSG-Processor#model-2
[Model III]:https://github.com/damiancipolat/Node-MSG-Processor#model-3
[Custom socket balancer]:https://github.com/damiancipolat/Node-MSG-Processor#using-custom-socket-balancer
[NGINX socket balancer]:https://github.com/damiancipolat/Node-MSG-Processor#using-nginx-as-socket-balancer

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
#To start server in a port.
$ npm run server 8080

#To start client, define server url and amount of request.
$ npm run client 100 http://localhost:8080
```

### Using custom socket balancer:

![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-4.png?raw=true)

**To run:**
```js
#To start client
$ npm run client

#To start server
$ npm run server

#To start balancer
$ npm run balancer
```
## Model 4:
**Using NGINX as socket balancer**, This show how to use NGINX as socket load balancer. In productive environemts, I thinks that use NGINX is the best option instead of use my example of the previouse example, because is a very eficient and confiable product so is a good option to use in every project. 

![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-5.png?raw=true)

**To run:**
```js
#To start server
$ sh ./start.sh

#To start nginx
$ sudo systemctl restart nginx

#To start client
$ npm run client

#To view process running
$ pm2 list
```
