import React from 'react'
import 'halfmoon/css/halfmoon-variables.min.css'
import './App.css'
import NavigationBar from './NavigationBar'
import IssueListView from './IssueListView'
import ProjectListView from './ProjectListView'

function App() {
  return (
    <main className="with-custom-webkit-scrollbars with-custom-css-scrollbars"
          data-dm-shortcut-enabled="true"
          data-sidebar-shortcut-enabled="true"
          data-set-preferred-mode-onload="true">
      <div className="page-wrapper with-navbar with-sidebar">
        <div className="sticky-alerts" />
        <NavigationBar />
        <div className="sidebar" />
        <div className="content-wrapper">
          <ProjectListView />
        </div>
      </div>
    </main>
  )
}

export default App
