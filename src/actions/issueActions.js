import { v4 as uuid } from 'uuid'

export function createIssue(payload) {
  return { type: 'CREATE_ISSUE', payload: { id: uuid(), complete: false, ...payload } }
}

export function updateIssue(payload) {
  return { type: 'UPDATE_ISSUE', payload }
}

export function toggleIssue(payload) {
  return { type: 'UPDATE_ISSUE', payload: { ...payload, complete: !payload.complete } }
}

export function deleteIssue(payload) {
  return { type: 'DELETE_ISSUE', payload }
}
