const cluster = require('cluster');
const worker  = require('./worker.js');
const master  = require('./master.js');

//Switch process flow.
if (cluster.isMaster)
  master();
else
  worker();