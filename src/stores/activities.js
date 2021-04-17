import repository from './repository'

const { store, create } = repository()

/**
 * @param {String} body
 * @param {String} icon
 */
export function log(body, icon = null) {
  create({ body, icon })
}

export default store
