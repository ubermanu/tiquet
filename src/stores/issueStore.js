import { writable, get } from 'svelte/store'

export const issueStore = writable([])
const { subscribe, set, update } = issueStore

export default {
  subscribe,
  add: (issue) => update(issues => [...issues, issue]),
  find: (issueId) => get(issueStore).filter(({ id }) => id === issueId)[0],
  reset: () => set([])
}
