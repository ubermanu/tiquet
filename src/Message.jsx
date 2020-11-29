import React from 'react'
import classNames from 'classnames'

export default function Message({ children, className = null }) {
  return (
    <div className={classNames('message', className)}>
      <div className="message-body">
        {children}
      </div>
    </div>
  )
}
