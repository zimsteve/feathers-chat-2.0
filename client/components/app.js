const React = require('react')
const { BrowserRouter, Match, Miss, Link } = require('react-router')
const map = require('lodash.map')


// components
const Chat = require('./chat')
const Login = require('./login')
const Signup = require('./sign-up')
const Home = require('./home')

const MatchWithSubRoutes = (route) => (
  <Match {...route} render={(props) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const routes = [
  {pattern: '/', component: Home, exactly: true},
  {pattern: '/chat', component: Chat},
  {pattern: '/login', component: Login},
  {pattern: '/sign-up', component: Signup}
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <BrowserRouter>
        <div>
        <nav> </nav>
        {
          map(routes, (route, i) => <MatchWithSubRoutes key={i} {...route}/>)
        }
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App
