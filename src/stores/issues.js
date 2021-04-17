import { writable, get } from 'svelte/store'
import { v4 as uuid } from 'uuid'
import { log } from './activities'
import { addSuccessMessage } from './messages'

const store = writable([])
const { update } = store

export function addIssue(issue) {
  update(issues => [...issues, { id: uuid(), complete: false, ...issue }])
  log('Created a new issue', 'far fa-plus-square')
  addSuccessMessage('Issue has been created')
}

export function findIssuesByKeyword(query) {
  const regExp = new RegExp(query || '', 'i')
  return get(store).filter(issue => {
    return regExp.test(issue.title) || regExp.test(issue.description)
  })
}

export function findIssueById(issueId) {
  return get(store).filter(({ id }) => id === issueId)[0]
}

function edit(issue) {
  update(issues => [...issues.filter(({ id }) => id !== issue.id), issue])
}

export function saveIssue(issue) {
  edit(issue)
  log('Issue has been updated', 'far fa-edit')
  addSuccessMessage('Issue has been updated')
}

export function toggleIssue(issue) {
  issue.complete = !issue.complete
  edit(issue)

  const msg = 'The issue has been marked as '.concat(issue.complete ? 'done' : 'undone')
  log(msg, 'far fa-check-square')
  addSuccessMessage(msg)
}

export function deleteIssue(issue) {
  update(issues => [...issues.filter(({ id }) => id !== issue.id)])
  log('Issue has been deleted', 'far fa-trash-alt')
  addSuccessMessage('Issue has been deleted')
}

export default store
