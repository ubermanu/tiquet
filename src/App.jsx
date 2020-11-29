import React from 'react'
import 'halfmoon/css/halfmoon-variables.min.css'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import NavigationBar from './NavigationBar'
import IssueListView from './IssueListView'
import ProjectListView from './ProjectListView'

function App() {
  return (
    <Router>
      <main className="with-custom-webkit-scrollbars with-custom-css-scrollbars"
            data-dm-shortcut-enabled="true"
            data-sidebar-shortcut-enabled="true"
            data-set-preferred-mode-onload="true">
        <div className="page-wrapper with-navbar with-sidebar">
          <div className="sticky-alerts" />
          <NavigationBar />
          <div className="sidebar" />
          <div className="content-wrapper">
            <Switch>
              <Route path="/projects">
                <ProjectListView />
              </Route>
              <Route path="/issues">
                <IssueListView />
              </Route>
              <Route path="/">
                <IssueListView />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </Router>
  )
}

export default App
