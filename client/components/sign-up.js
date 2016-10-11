const React = require('react')

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    //this.props.signUp()
    console.log('the real ev', ev)
  }

  handleEmail(ev) {
    this.setState({email: ev.target.value})
  }

  handlePassword(ev) {
    this.setState({password: ev.target.value})
  }

  render() {
    const {signUp} = this.props
    // debug('props', this.props)

    return (
      <main className="login container">
        <div className="row">
          <div className="col-12 col-6-tablet push-3-tablet text-center">
            <h1 className="font-100">Create an Account</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
            <form className="form" method="post" action="/signup" onSubmit={this.handleSubmit}>
              <fieldset>
                <input className="block" value={this.state.text} type="email" name="email" placeholder="email" onChange={this.handleEmail}/>
              </fieldset>
              <fieldset>
                <input className="block" value={this.state.text} type="password" name="password" placeholder="password" onChange={this.handlePassword}/>
              </fieldset>

              <button type="submit" className="button button-primary block signup">
                Signup
              </button>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

module.exports = Signup
