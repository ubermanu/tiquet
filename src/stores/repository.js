import { get, writable } from 'svelte/store'
import { v4 as uuid } from 'uuid'

/**
 * Create a writable store with CRUD functions.
 * Each items contains an `id` property managed by the store itself.
 * @returns {*}
 */
export default () => {
  const store = writable([])
  const { update: u } = store

  function create(item) {
    u(s => [...s, { id: uuid(), ...item }])
  }

  function update(item) {
    u(s => [...s.map(i => i.id === item.id ? item : i)])
  }

  function destroy(item) {
    u(s => [...s.filter(i => i.id !== item.id)])
  }

  function toArray() {
    return get(store)
  }

  return {
    store,
    create,
    update,
    destroy,
    toArray
  }
}
