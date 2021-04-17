import depot from 'svelte-depot'
import { log } from './activities'
import { addSuccessMessage } from './messages'

const issues = depot()
const { store } = issues

export function addIssue(issue) {
  issues.add({ complete: false, ...issue })
  log('Created a new issue', 'far fa-plus-square')
  addSuccessMessage('Issue has been created')
}

export function findIssuesByKeyword(query) {
  const regExp = new RegExp(query || '', 'i')
  return issues.toArray().filter(issue => {
    return regExp.test(issue.title) || regExp.test(issue.description)
  })
}

export function findIssueById(id) {
  return issues.find({ id })
}

export function saveIssue(issue) {
  issues.update(issue)
  log('Issue has been updated', 'far fa-edit')
  addSuccessMessage('Issue has been updated')
}

export function toggleIssue(issue) {
  issue.complete = !issue.complete
  issues.update(issue)

  const msg = 'The issue has been marked as '.concat(issue.complete ? 'done' : 'undone')
  log(msg, 'far fa-check-square')
  addSuccessMessage(msg)
}

export function deleteIssue(issue) {
  issues.remove(issue)
  log('Issue has been deleted', 'far fa-trash-alt')
  addSuccessMessage('Issue has been deleted')
}

export default store
