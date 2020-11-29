import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span>🦟</span>
        </Link>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/issues" className="navbar-item">Issues</Link>
          <Link to="/settings" className="navbar-item">Settings</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                <span>Log in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
