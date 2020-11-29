import React from 'react'
import classNames from 'classnames'

export default function Message({ children, className = null, ...restProps }) {
  return (
    <div className={classNames('message', className)} {...restProps}>
      <div className="message-body">
        {children}
      </div>
    </div>
  )
}
