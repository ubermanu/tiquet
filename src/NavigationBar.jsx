import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import NavigationSearch from './NavigationSearch'

export default function NavigationBar() {
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
          <NavLink exact to="/issues/new" className="navbar-item" activeClassName="is-active">
            <span className="icon">
              <i className="fa fa-plus" />
            </span>
            &nbsp;
            <span>New issue</span>
          </NavLink>
          <NavLink exact to="/issues" className="navbar-item" activeClassName="is-active">
            <span className="icon">
              <i className="fa fa-list" />
            </span>
            &nbsp;
            <span>Issues</span>
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <NavigationSearch />
          </div>
        </div>
      </div>
    </nav>
  )
}
