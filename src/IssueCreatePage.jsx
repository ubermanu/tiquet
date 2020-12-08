import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createIssue } from './actions/issueActions'
import { getIssuesByKeyword } from './selectors/issueSelectors'
import { Link } from 'react-router-dom'

export default function IssueCreatePage() {
  const initialFormData = {
    title: '',
    description: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  const dispatch = useDispatch()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createIssue(formData))
    setFormData(initialFormData)
  }

  // Find issues that would match the new one
  const alikeIssues = getIssuesByKeyword(formData.title)

  return (
    <div className="container">
      <h1 className="title is-1">New issue</h1>
      <dov className="columns">
        <div className="column is-half">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input name="title" className="input" type="text" required={true}
                       onChange={handleChange} value={formData.title} />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea name="description" className="textarea"
                          onChange={handleChange} value={formData.description} />
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <Link to={`/issues`} className="button is-link is-light">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
        <div className="column is-half">
          <div className="label">Matching issues</div>
          <article className="message is-small">
            <div className="message-body">
              Check if the issue does not exist already
            </div>
          </article>
          {alikeIssues.map(issue => (
            <div className="card mb-4" key={issue.id}>
              <div className="card-content">
                <span className="is-size-6">{issue.title}</span>
              </div>
            </div>
          ))}
        </div>
      </dov>
    </div>
  )
}
