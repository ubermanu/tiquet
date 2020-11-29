import React from 'react'

function IssueCreateView() {
  return (
    <div className="container">
      <form>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea" />
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

export default IssueCreateView
