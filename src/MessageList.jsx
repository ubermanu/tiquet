import React from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'

export default function MessageList() {
  const messages = useSelector(state => state.messages)

  return messages.length ? (
    messages.map(message => (
      <Message key={message.id}>{message.body}</Message>
    ))
  ) : (
    <></>
  )
}
