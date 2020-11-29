import React from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'

export default function MessageList() {
  const messages = useSelector(state => state.messages)

  return (
    <div className="messages">
      {messages.map(message => (
        <Message key={message.id} className={message.level}>{message.body}</Message>
      ))}
    </div>
  )
}
