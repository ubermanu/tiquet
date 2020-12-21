import { writable, get } from 'svelte/store'
import { exclude } from './filters'

const issues = writable([])
const { update } = issues

export function addIssue(issue) {
  update(issues => [...issues, issue])
}

export function findIssuesByKeyword(query) {
  const regExp = new RegExp(query || '', 'i')
  return get(issues).filter(issue => {
    return regExp.test(issue.title) || regExp.test(issue.description)
  })
}

export function findIssueById(issueId) {
  return get(issues).filter(({ id }) => id === issueId)[0]
}

export function saveIssue(issue) {
  update(issues => [...issues.filter(exclude(issue.id)), issue])
}

export default issues
