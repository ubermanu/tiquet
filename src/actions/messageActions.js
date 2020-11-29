import { v4 as uuid } from 'uuid'

export function addMessage(body, level = false) {
  return { type: 'ADD_MESSAGE', payload: { id: uuid(), body, level } }
}

export function addSuccessMessage(body) {
  return addMessage(body, 'is-primary')
}

export function deleteMessage(payload) {
  return { type: 'DELETE_MESSAGE', payload }
}
