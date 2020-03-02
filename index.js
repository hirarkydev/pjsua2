// greet module: index.js
const addon = require('bindings')('greet'); // import 'greet.node'
exports.hello = addon.greetHello;