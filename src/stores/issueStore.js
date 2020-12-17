import { writable } from 'svelte/store'

const { subscribe, set, update } = writable([])

export default {
  subscribe,
  add: (issue) => update(issues => [...issues, issue]),
  reset: () => set([])
}
