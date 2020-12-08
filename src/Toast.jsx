import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import { deleteMessage } from './actions/messageActions'

export default function Toast({ message }) {
  const dispatch = useDispatch()
  let timeoutHandler = 0

  function handleDelete(message) {
    dispatch(deleteMessage(message))
    clearTimeout(timeoutHandler)
  }

  useEffect(() => {
    timeoutHandler = setTimeout(() => {
      handleDelete(message)
    }, 2000)
  }, [message])

  return (
    <div key={message.id} className={classNames('notification', message.level)}>
      <button className="delete" onClick={() => handleDelete(message)} />
      {message.body}
    </div>
  )
}
