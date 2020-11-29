import React from 'react'
import 'bulma/css/bulma.min.css'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import NavigationBar from './NavigationBar'
import IssueListView from './IssueListView'
import IssueDetailView from './IssueDetailView'
import IssueCreateView from './IssueCreateView'
import NotFoundView from './NotFoundView'
import IssueEditView from './IssueEditView'
import Toast from './Toast'

export default function App() {
  return (
    <Router>
      <main>
        <NavigationBar />
        <Toast />
        <section className="section">
          <Switch>
            <Route exact path="/issue/:id">
              <IssueDetailView />
            </Route>
            <Route exact path="/issue/:id/edit">
              <IssueEditView />
            </Route>
            <Route exact path="/issues/new">
              <IssueCreateView />
            </Route>
            <Route exact path="/issues">
              <IssueListView />
            </Route>
            <Route exact path="/">
              <Redirect to="/issues" />
            </Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Powered by <a href="https://github.com/ubermanu/tiquet" target="_blank">Tiquet</a>
            </p>
          </div>
        </footer>
      </main>
    </Router>
  )
}
