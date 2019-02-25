# Message processor
Examples and techniques of how to create a nodejs message processor through a permanent socket.

**Chapter list:**

- **[Model I]**
- **[Model II]**
- **[Model III]**
- **[Socket balancer]**

[Model I]:https://github.com/damiancipolat/Node-MSG-Processor#model-i
[Model II]:https://github.com/damiancipolat/Node-MSG-Processor#model-2
[Model III]:https://github.com/damiancipolat/Node-MSG-Processor#model-3
[Socket balancer]:https://github.com/damiancipolat/Node-MSG-Processor#about-socket-balancer

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


### About socket balancer:

![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-4.png?raw=true)

**To run:**
```js
aaaaa
...


