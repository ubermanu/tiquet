import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateIssue } from './actions/issueActions'
import { getIssueById } from './selectors/issueSelectors'
import NotFoundView from './NotFoundView'

export default function IssueEditView() {

  const { id } = useParams()
  const issue = getIssueById(id)

  const [formData, setFormData] = useState(issue)
  const dispatch = useDispatch()

  function handleChange(e) {
    setFormData({ ...issue, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateIssue(formData))
  }

  return (
    <>
      {issue ? (
        <div className="container">
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
                <button className="button is-link">Save</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <NotFoundView />
      )}
    </>
  )
}
