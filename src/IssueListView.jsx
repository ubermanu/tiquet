import React from 'react'
import { connect } from 'react-redux'

function IssueListView({ issues }) {
  return (
    <div className="container">
      {issues.map(issue => (
        <div key={issue.id} className="card">
          <div className="card-content">
            <p className="title is-6">{issue.title}</p>
            <div className="content">
              <p>{issue.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  issues: state.issues
})

export default connect(
  mapStateToProps
)(IssueListView)
