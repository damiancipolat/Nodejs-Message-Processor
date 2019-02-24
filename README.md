# Message processor
Examples and techniques of how to create a nodejs message processor through a permanent socket.

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
A model defined, that is ready to scale horizontal. This model use the model II with a load balancer in the front.

**Stress test:**
Process done with 10k messages.

![N|Solid](https://github.com/damiancipolat/Node-MSG-Processor/blob/master/doc/doc-3.png?raw=true)

**To run:**
```js
...
```

