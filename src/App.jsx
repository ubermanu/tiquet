import React from 'react'
import 'bulma/css/bulma.min.css'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import NavigationBar from './NavigationBar'
import IssueListView from './IssueListView'

function App() {
  return (
    <Router>
      <main>
        <NavigationBar />
        <section className="section">
          <Switch>
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
              <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </footer>
      </main>
    </Router>
  )
}

export default App
