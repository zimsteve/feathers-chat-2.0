const feathers = require('feathers-client');
const io = require('socket.io-client');

//const socket = io();
module.exports = feathers()
  .configure(feathers.rest('http://localhost:3030').fetch(fetch))
//  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));
