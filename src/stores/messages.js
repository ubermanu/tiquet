import { writable } from 'svelte/store'
import { v4 as uuid } from 'uuid'

const store = writable([])
const { update } = store

export function addMessage(message) {
  update(s => [...s, { id: uuid(), ...message }])
}

export function addSuccessMessage(body) {
  addMessage({ body, level: 'is-success' })
}

export function deleteMessage(message) {
  update(s => [...s.filter(({ id }) => id !== message.id)])
}

export default store
