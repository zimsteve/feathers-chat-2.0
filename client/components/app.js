const React = require('react')
const {BrowserRouter, Redirect, Match, Miss, Link} = require('react-router')
const map = require('lodash.map')
const debug = require('debug')

// components
const Chat = require('./chat')
const Login = require('./login')
const Signup = require('./sign-up')
const Home = require('./home')

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
  }
  signUp(user) {
    debug('signing up!!!!', user)
    const userService = api.service('/users')
    userService.create(user).then(() => {
      debug('user created')
    }).catch(debug)
  }
  render() {
    const { isAuthenticated } = this.state
    return (
      <BrowserRouter>
        <div>
          <nav></nav>
          { isAuthenticated ? (<Redirect to="/chat"/>) : <Match exactly pattern="/" component={Home}/> }
          <Match pattern="/login" render={(route) => <Login login={this.login}/>}/>
          <Match pattern="/sign-up" render={(route) => <Signup signUp={this.signUp}/>}/>
          { isAuthenticated ? (<Match pattern="/chat" component={Chat}/>) : null }
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
