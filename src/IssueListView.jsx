import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { toggleIssue } from './actions/issueActions'

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
