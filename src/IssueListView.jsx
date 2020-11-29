import React from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIssue, deleteIssue } from './actions/issueActions'
import { Link } from 'react-router-dom'

export default function IssueListView() {
  const issues = useSelector(state => state.issues)
  const dispatch = useDispatch()

  return (
    <div className="container">
      {issues.map(issue => (
        <div key={issue.id} className="card mb-4">
          <div className="card-content">
            <div className="columns">
              <div className="column">
                <label className="checkbox">
                  <input type="checkbox" className="mr-3" defaultValue={issue.complete}
                         onChange={() => dispatch(toggleIssue(issue))} />
                  <span className={classNames('is-size-5', !!issue.complete && 'is-strike')}>{issue.title}</span>
                </label>
              </div>
              <div className="column is-one-fifth">
                <div className="buttons">
                  <Link to={`/issue/${issue.id}`} className="button is-small is-light">Edit</Link>
                  <button className="button is-small is-light is-danger" onClick={() => dispatch(deleteIssue(issue))}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
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
