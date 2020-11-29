import { v4 as uuid } from 'uuid'

export function addMessage(body) {
  return { type: 'ADD_MESSAGE', payload: { id: uuid(), body } }
}
