import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

function IssueListView({ issues }) {
  return (
    <div className="container">
      {issues.map(issue => (
        <div key={issue.id} className="card mb-4">
          <div className="card-content">
            <label className="checkbox">
              <input type="checkbox" className="mr-3" value={issue.complete}/>
              <span className={classNames('is-size-5', issue.complete && 'is-strike')}>{issue.title}</span>
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

export default connect(
  mapStateToProps
)(IssueListView)
