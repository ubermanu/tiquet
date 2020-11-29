import React from 'react'

function ProjectListView() {
  const projects = [
    {
      uuid: 0,
      name: 'Name of the project',
      description: 'Subtitle that hooks the reader and prompts them to click on the read more button.'
    }
  ]

  return (
    <section className="container">
      {projects.map(project => (
        <div key={project.uuid} className="w-400 mw-full">
          <div className="card">
            <h2 className="card-title">
              {project.name}
            </h2>
            <p className="text-muted">
              {project.description}
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

export default ProjectListView
