import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import { deleteMessage } from './actions/messageActions'

export default function Toast({ message }) {
  const dispatch = useDispatch()
  let timeoutHandler = 0
  let animationHandler = 0

  function handleDelete(message) {
    dispatch(deleteMessage(message))
  }

  let [progress, setProgress] = useState(0)

  useEffect(() => {
    timeoutHandler = setTimeout(() => {
      handleDelete(message)
    }, 2000)

    animationHandler = setInterval(() => {
      setProgress(p => p + 2.5)
    }, 50)

    return () => {
      clearTimeout(timeoutHandler)
      clearInterval(animationHandler)
    }
  }, [message])

  return (
    <div key={message.id} className={classNames('notification', 'pb-5', message.level)}>
      <button className="delete" onClick={() => handleDelete(message)} />
      {message.body}
      <progress className="progress is-small is-radiusless" value={progress} max="100">15%</progress>
    </div>
  )
}
