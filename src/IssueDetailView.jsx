import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NotFoundView from './NotFoundView'

export default function IssueDetailView() {
  const { id } = useParams()
  const issue = useSelector(state => state.issues.filter(issue => issue.id === id)[0])

  return (
    <>
      {issue ? (
        <div className="container">
          <article className="content">
            <h2 className="content-title">{issue.title}</h2>
            <p>{issue.description}</p>
          </article>
        </div>
      ) : (
        <NotFoundView />
      )}
    </>
  )
}
