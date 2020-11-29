import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import { deleteMessage } from './actions/messageActions'

export default function MessageList() {
  const messages = useSelector(state => state.messages)
  const dispatch = useDispatch()

  return (
    <div className="messages">
      {messages.map(message => (
        <Message key={message.id} className={message.level}
                 onClick={() => dispatch(deleteMessage(message))}>
          {message.body}
        </Message>
      ))}
    </div>
  )
}
