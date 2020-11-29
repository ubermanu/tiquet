import React from 'react'

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="btn btn-action" type="button">
          <i className="fa fa-bars" aria-hidden="true"/>
          <span className="sr-only">Toggle sidebar</span>
        </button>
      </div>
      <a href="#" className="navbar-brand">
        <span>🦟</span>
        <span>Tiquet</span>
      </a>
      <span className="navbar-text text-monospace">v0.1</span>
      <ul
        className="navbar-nav d-none d-md-flex">
        <li className="nav-item active">
          <a href="#" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Issues</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Settings</a>
        </li>
      </ul>
      <form className="form-inline d-none d-md-flex ml-auto" action="">
        <input type="text" className="form-control" placeholder="Search anything..." required={true} />
        <button className="btn btn-primary" type="submit">
          <i className="fa fa-search" aria-hidden="true"/>
        </button>
      </form>
      <div
        className="navbar-content d-md-none ml-auto">
        <div className="dropdown with-arrow">
          <button className="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
            Menu
            <i className="fa fa-angle-down" aria-hidden="true"/>
          </button>
          <div className="dropdown-menu dropdown-menu-right w-200"
               aria-labelledby="navbar-dropdown-toggle-btn-1">
            <a href="#" className="dropdown-item">Docs</a>
            <a href="#" className="dropdown-item">Products</a>
            <div className="dropdown-divider"></div>
            <div className="dropdown-content">
              <form action="..." method="...">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email address" required="required" />
                </div>
                <button className="btn btn-primary btn-block" type="submit">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
