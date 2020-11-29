import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

function NavigationBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <span className="is-size-4">🦟</span>
        </div>
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
              <i className="fa fa-plus" />
            </span>
            &nbsp;
            <span>New issue</span>
          </Link>
          <Link to="/issues" className="navbar-item">
            <span className="icon">
              <i className="fa fa-list" />
            </span>
            &nbsp;
            <span>Issues</span>
          </Link>
          <Link to="/settings" className="navbar-item">
            <span className="icon">
              <i className="fa fa-cog" />
            </span>
            &nbsp;
            <span>Settings</span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Find an issue..." />
                <span className="icon is-small is-left">
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
