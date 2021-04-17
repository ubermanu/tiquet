import depot from 'svelte-depot'

const activities = depot()
const { store } = activities

/**
 * @param {String} body
 * @param {String} icon
 */
export function log(body, icon = null) {
  activities.add({ body, icon })
}

export default store
