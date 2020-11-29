import React from 'react'

function IssueListView() {
  const issues = [
    {
      uuid: 0,
      name: 'Name of the issue',
      description: 'Subtitle that hooks the reader and prompts them to click on the read more button.'
    }
  ]

  return (
    <section className="container">
      {issues.map(issue => (
        <div key={issue.uuid} className="w-400 mw-full">
          <div className="card">
            <h2 className="card-title">
              {issue.name}
            </h2>
            <p className="text-muted">
              {issue.description}
            </p>
            <div className="text-right">
              <a href="#" className="btn">Read more</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default IssueListView
