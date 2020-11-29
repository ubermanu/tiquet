import { v4 as uuid } from 'uuid'

export function createIssue(data) {
  return { type: 'ADD_ISSUE', payload: { id: uuid(), ...data } }
}
