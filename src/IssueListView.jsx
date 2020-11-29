import React from 'react'
import { useStore } from './StoreContext'

function IssueListView() {
  const { store } = useStore()
  const { issues } = store

  return (
    <div className="container">
      {issues.map(issue => (
        <div key={issue.uid} className="card">
          <div className="card-content">
            <p className="title is-6">{issue.name}</p>
            <div className="content">
              <p>{issue.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default IssueListView
