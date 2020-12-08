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
import IssueListPage from './IssueListPage'
import IssueDetailPage from './IssueDetailPage'
import IssueCreatePage from './IssueCreatePage'
import NotFoundPage from './NotFoundPage'
import IssueEditPage from './IssueEditPage'
import Toast from './Toast'
import SearchResultPage from './SearchResultPage'

export default function App() {
  return (
    <Router>
      <main>
        <NavigationBar />
        <Toast />
        <section className="section">
          <Switch>
            <Route exact path="/issue/:id">
              <IssueDetailPage />
            </Route>
            <Route exact path="/issue/:id/edit">
              <IssueEditPage />
            </Route>
            <Route exact path="/issues/new">
              <IssueCreatePage />
            </Route>
            <Route exact path="/issues">
              <IssueListPage />
            </Route>
            <Route exact path="/search">
              <SearchResultPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/issues" />
            </Route>
            <Route path="*">
              <NotFoundPage />
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
