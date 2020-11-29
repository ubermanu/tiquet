import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createIssue } from './actions/issueActions'

export default function IssueCreateView() {
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

  return (
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
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}
