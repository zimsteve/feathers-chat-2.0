const React = require('react')
const {BrowserRouter, Redirect, Match, Miss, Link} = require('react-router')
const map = require('lodash.map')
const debug = require('debug')

// components
const Chat = require('./chat')
const Login = require('./login')
const Signup = require('./sign-up')
const Home = require('./home')

const api = require('../api')

// const MatchWithSubRoutes = (route) => (
//   <Match {...route} render={(props) => (
//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )

// const routes = [
//   {pattern: '/', component: Home, exactly: true},
//   {pattern: '/chat', component: Chat},
//   {pattern: '/login', component: Login},
//   {pattern: '/sign-up', component: Signup}
// ]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
      user: null,
      users: [],
      messages: []
    }
    this.signUp = this.signUp.bind(this)
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    api
      .authenticate()
      .then(() => {
        debug('authenticated')
        this.setState({ isAuthenticated: true })
      })
      .catch(err => {
        debug('not authenticated')
      })

//    const userService = api.service('users')
//    const messageService = api.service('messages')
//
//    // Find all users initially
//    userService.find().then(page => this.setState({ users: page.data }))
//    // Listen to new users so we can show them in real-time
//    userService.on('created', user => this.setState({
//      users: this.state.users.concat(user)
//    }))
//
//    // Find the last 10 messages
//    messageService.find({
//      query: {
//        $sort: { createdAt: 1 },
//        $limit: this.props.limit || 10
//      }
//    }).then(page => this.setState({ messages: page.data }))
//    // Listen to newly created messages
//    messageService.on('created', message => this.setState({
//      messages: this.state.messages.concat(message)
//    }))
  }

  signUp(user) {
    debug('signing up!!!!', user)
    const userService = api.service('/users')
    userService.create(user)
      .then(() => {
         debug('user created')
      })
      .catch(debug)
  }

  login(user) {
    api
      .authenticate({
        type: 'local',
        email: user.email,
        password: user.password
      })
      .then(() => {
        debug('authenticated')
        this.setState({ isAuthenticated: true })
      })
  }

  render() {
    const {isAuthenticated} = this.state
    return (
      <BrowserRouter>
        <div>
          <nav></nav>
          {isAuthenticated
            ? (<Redirect to="/chat"/>)
            : <Match exactly pattern="/" component={Home}/>}
          <Match pattern="/login" render={(route) => <Login login={this.login}/>}/>
          <Match pattern="/sign-up" render={(route) => <Signup signUp={this.signUp}/>}/> {isAuthenticated
            ? (<Match pattern="/chat" component={Chat}/>)
            : null}
        </div>
      </BrowserRouter>
    )
  }
}

// from App component - fancy way
//        {
//          map(routes, (route, i) => <MatchWithSubRoutes key={i} {...route}/>)
//        }

module.exports = App
