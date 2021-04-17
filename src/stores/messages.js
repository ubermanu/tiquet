import repository from './repository'

const messages = repository()
const { store, create, destroy } = messages

/**
 * @param {String} body
 */
export function addSuccessMessage(body) {
  create({ body, level: 'is-success' })
}

/**
 * @param {{id}} message
 */
export function deleteMessage(message) {
  destroy(message)
}

export default store
