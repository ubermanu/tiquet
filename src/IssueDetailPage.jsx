import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NotFoundPage from './NotFoundPage'

export default function IssueDetailPage() {
  const { id } = useParams()
  const issue = useSelector(state => state.issues.filter(issue => issue.id === id)[0])

  return (
    <>
      {issue ? (
        <div className="container">
          <h1 className="title is-1">{issue.title}</h1>
          <article className="content">
            <p>{issue.description}</p>
          </article>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  )
}
