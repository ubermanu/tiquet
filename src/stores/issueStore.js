import { writable, get } from 'svelte/store'
import { exclude } from '../reducers/filters'

export const issueStore = writable([])
const { subscribe, set, update } = issueStore

export default {
  subscribe,
  add: (issue) => update(issues => [...issues, issue]),
  find: (issueId) => get(issueStore).filter(({ id }) => id === issueId)[0],
  save: (issue) => update(issues => [...issues.filter(exclude(issue.id)), issue]),
  findAll: () => get(issueStore),
  reset: () => set([])
}
