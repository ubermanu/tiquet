import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { deleteMessage } from './actions/messageActions'

export default function Toast() {
  const messages = useSelector(state => state.messages)
  const dispatch = useDispatch()

  function handleDelete(message) {
    dispatch(deleteMessage(message))
  }

  return (
    <div className="toast">
      {messages.map(message => (
        <div key={message.id} className={classNames('notification', message.level)}>
          <button className="delete" onClick={() => handleDelete(message)} />
          {message.body}
        </div>
      ))}
    </div>
  )
}
