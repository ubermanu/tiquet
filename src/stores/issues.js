import { writable, get } from 'svelte/store'
import { v4 as uuid } from 'uuid'

const store = writable([])
const { update } = store

export function addIssue(issue) {
  update(issues => [...issues, { id: uuid(), complete: false, ...issue }])
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

export function saveIssue(issue) {
  update(issues => [...issues.filter(({ id }) => id !== issue.id), issue])
}

export function toggleIssue(issue) {
  issue.complete = !issue.complete
  saveIssue(issue)
}

export function deleteIssue(issue) {
  update(issues => [...issues.filter(({ id }) => id !== issue.id)])
}

export default store
