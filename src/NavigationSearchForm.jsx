import React, { useState } from 'react'
import queryString from 'query-string'
import { useHistory } from 'react-router-dom'

export default function NavigationSearchForm() {
  const [formData, setFormData] = useState({})
  const history = useHistory()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const query = queryString.stringify(formData)
    history.push(`/search?${query}`)
  }

  return (
    <form action={`/search`} onSubmit={handleSubmit}>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="q" placeholder="Find an issue..."
                 required={true} onChange={handleChange} />
          <span className="icon is-small is-left">
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
    </form>
  )
}
