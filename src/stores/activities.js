import { writable } from 'svelte/store'
import { v4 as uuid } from 'uuid'

const store = writable([])
const { update } = store

export function log(body, icon) {
  update(s => [...s, { id: uuid(), body, icon }])
}

export default store
