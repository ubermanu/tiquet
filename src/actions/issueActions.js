import { v4 as uuid } from 'uuid'

export function createIssue(data) {
  return { type: 'ADD_ISSUE', payload: { id: uuid(), complete: false, ...data } }
}

export function toggleIssue(issue) {
  return { type: 'UPDATE_ISSUE', payload: { ...issue, complete: !issue.complete } }
}

export function deleteIssue(payload) {
  return { type: 'DELETE_ISSUE', payload }
}
