import React from 'react'
import 'bulma/css/bulma.min.css'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { StoreContextProvider } from './StoreContext'
import NavigationBar from './NavigationBar'
import IssueListView from './IssueListView'
import IssueView from './IssueView'
import IssueCreateView from './IssueCreateView'

function App() {
  return (
    <StoreContextProvider>
      <Router>
        <main>
          <NavigationBar />
          <section className="section">
            <Switch>
              <Route path="/issue/:issueId">
                <IssueView />
              </Route>
              <Route path="/issues/new">
                <IssueCreateView />
              </Route>
              <Route path="/issues">
                <IssueListView />
              </Route>
              <Route path="/">
                <IssueListView />
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
    </StoreContextProvider>
  )
}

export default App
