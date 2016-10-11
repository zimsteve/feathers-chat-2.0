const React = require('react')
const { Link } = require('react-router')

const Home = (props) =>
    <main className="home container">
      <div className="row">
        <div className="col-12 col-8-tablet push-2-tablet text-center">
          <img className="logo center-item"
            src="http://feathersjs.com/img/feathers-logo-wide.png"
            alt="Feathers Logo"/>
          <h3 className="title">Chat</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-12 push-4-tablet col-4-tablet">
          <div className="row">
            <div className="col-12">
              <Link to="/login" className="button button-primary block login">
                Login
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Link to="/sign-up" className="button button-primary block signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>


module.exports = Home
