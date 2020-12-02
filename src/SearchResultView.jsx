import React from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIssue, deleteIssue } from './actions/issueActions'
import { Link, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getIssuesByKeyword } from './selectors/issueSelectors'

export default function SearchResultView() {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const keyword = query.q || ''

  const issues = getIssuesByKeyword(keyword)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <h1 className="title is-1">Search: "{keyword}"</h1>
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
                  <Link to={`/issue/${issue.id}`} className="button is-small is-light">Show</Link>
                  <Link to={`/issue/${issue.id}/edit`} className="button is-small is-light">Edit</Link>
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
            No results found
          </div>
        </article>
      )}
    </div>
  )
}
