import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { toggleIssue } from './actions/issueActions'
import { Link } from 'react-router-dom'

function IssueListView({ issues, toggleIssue }) {
  return (
    <div className="container">
      {issues.map(issue => (
        <div key={issue.id} className="card mb-4">
          <div className="card-content">
            <label className="checkbox">
              <input type="checkbox" className="mr-3" defaultValue={issue.complete}
                     onChange={() => toggleIssue(issue)} />
              <span className={classNames('is-size-5', !!issue.complete && 'is-strike')}>{issue.title}</span>
            </label>
          </div>
        </div>
      ))}
      {issues.length === 0 && (
        <article className="message">
          <div className="message-body">
            No issues found, <Link to="/issues/new">create a new one</Link>
          </div>
        </article>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  issues: state.issues
})

const mapDispatchToProps = {
  toggleIssue
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueListView)
