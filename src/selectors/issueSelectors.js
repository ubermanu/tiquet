import { useSelector } from 'react-redux'

export function getIssueById(id) {
  return useSelector(state => state.issues.filter(issue => issue.id === id)[0])
}

// TODO: Handle search to remote data src
export function getIssuesByKeyword(query) {
  // Do not return results if there are no query
  if (typeof query !== 'string' || query.length === 0) {
    return []
  }

  const regExp = new RegExp(query || '', 'i')
  return useSelector(state => state.issues.filter(issue => {
    return regExp.test(issue.title) || regExp.test(issue.description)
  }))
}
