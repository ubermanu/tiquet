import { writable, get } from 'svelte/store'
import { exclude } from '../reducers/filters'

export const issueStore = writable([])
const { subscribe, set, update } = issueStore

// TODO: Clean this with separated exports?
export default {
  subscribe,
  add: (issue) => {
    return update(issues => [...issues, issue])
  },
  find: (issueId) => {
    return get(issueStore).filter(({ id }) => id === issueId)[0]
  },
  save: (issue) => {
    return update(issues => [...issues.filter(exclude(issue.id)), issue])
  },
  findAll: () => {
    return get(issueStore)
  },
  findByKeyword: (query) => {
    const regExp = new RegExp(query || '', 'i')
    return get(issueStore).filter(issue => {
      return regExp.test(issue.title) || regExp.test(issue.description)
    })
  },
  reset: () => set([])
}
