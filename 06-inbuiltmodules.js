//? INBUILT MODULES
//os
// path
// fs
// http

const os = require('os');
const { availableMemory } = require('process');

console.log(os.type());
console.log(os.version());
console.log(os.machine());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime());

const userMobileinfo = {
  osName: os.type(),
  osVersion: os.version(),
  osfreemem: os.freemem(),
  ostotalmem: os.totalmem(),
};

console.log(userMobileinfo);
