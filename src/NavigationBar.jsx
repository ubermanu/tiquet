import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

function NavigationBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span className="is-size-4">🦟</span>
        </Link>
        <a role="button" aria-label="menu" aria-expanded="false" onClick={() => setOpen(!open)}
           className={classNames('navbar-burger', 'burger', open && 'is-active')}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={classNames('navbar-menu', open && 'is-active')}>
        <div className="navbar-start">
          <Link to="/issues/new" className="navbar-item">
            <span className="icon">
              <i className="fa fa-plus"/>
            </span>
            &nbsp;
            <span>New issue</span>
          </Link>
          <Link to="/issues" className="navbar-item">
            <span className="icon">
              <i className="fa fa-list"/>
            </span>
            &nbsp;
            <span>Issues</span>
          </Link>
          <Link to="/settings" className="navbar-item">
            <span className="icon">
              <i className="fa fa-cog"/>
            </span>
            &nbsp;
            <span>Settings</span>
          </Link>
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
