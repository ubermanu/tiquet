import depot from 'svelte-depot'

const messages = depot()
const { store } = messages

/**
 * @param {String} body
 */
export function addSuccessMessage(body) {
  messages.add({ body, level: 'is-success' })
}

/**
 * @param {{id}} message
 */
export function deleteMessage(message) {
  messages.remove(message)
}

export default store
