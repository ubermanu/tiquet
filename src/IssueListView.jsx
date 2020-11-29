import React from 'react'

function IssueListView() {
  const issues = [
    {
      uuid: 0,
      name: 'Name of the issue',
      description: 'Subtitle that hooks the reader and prompts them to click on the read more button.',
      done: false
    }
  ]

  return (
    <div className="container">
      {issues.map(issue => (
        <div key={issue.uuid} className="card">
          <div className="card-content">
            <p className="title is-6">{issue.name}</p>
            <div className="content">
              <p>{issue.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default IssueListView
