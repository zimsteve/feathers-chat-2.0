const React = require('react')

class Login extends React.Component{
  render() {
    return (
      <main className="login container">
        <div className="row">
          <div className="col-12 col-6-tablet push-3-tablet text-center">
            <h1 className="font-100">Welcome Back</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
            <form className="form" method="post" action="/auth/local">
              <fieldset>
                <input className="block" type="email" name="email" placeholder="email"/>
              </fieldset>
              <fieldset>
                <input className="block" type="password" name="password" placeholder="password"/>
              </fieldset>
              <button type="submit" className="button button-primary block login">Login</button>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

module.exports = Login
