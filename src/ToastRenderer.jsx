import React from 'react'
import { useSelector } from 'react-redux'
import Toast from './Toast'

export default function ToastRenderer() {
  const messages = useSelector(state => state.messages)

  return (
    <div className="toast">
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </div>
  )
}
