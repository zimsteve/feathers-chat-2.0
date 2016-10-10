const domready = require('domready')
const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/app')

const feathers = require('feathers-client')
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const io = require('socket.io-client');



const PLACEHOLDER = 'https://placeimg.com/60/60/people'
// An anonymous user if the message does not have that information
const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
}

// Establish a Socket.io connection
const socket = io()
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const api = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  // Use localStorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }))

domready(() => {
  ReactDOM.render(
    <App api={api}/>,
    document.querySelector('main')
  )
})
