import { useSelector } from 'react-redux'

export function getIssueById(id) {
  return useSelector(state => state.issues.filter(issue => issue.id === id)[0])
}
