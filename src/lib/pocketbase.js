import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import { fail as _fail } from '@sveltejs/kit'
import PocketBase from 'pocketbase'

export function createPocketBase() {
  return new PocketBase(PUBLIC_POCKETBASE_URL)
}

/**
 * Returns the URL of the given image from the given collection and record.
 *
 * @param {string} collectionId
 * @param {string} recordId
 * @param {string} filename
 * @param {string} size
 * @returns {string}
 */
export function getImageUrl(collectionId, recordId, filename, size = '0x0') {
  return `${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${filename}?thumb=${size}`
}

/**
 * Returns the URL of the user's avatar image.
 *
 * @param {User} user
 * @param {string} size
 * @returns {string}
 */
export function getUserAvatarUrl(user, size = '0x0') {
  return user.avatar
    ? getImageUrl('users', user.id, user.avatar, size)
    : `https://ui-avatars.com/api/?name=${user.email}&size=${size}`
}

/**
 * Returns a SvelteKit failure action with the given error status and message.
 *
 * @param error
 * @returns {import('./$types').ActionFailure<{ message }>}
 */
export function fail(error) {
  return _fail(error.status, { message: error.message })
}

/**
 * Returns a SvelteKit success action with the given message.
 *
 * @param {string} message
 * @returns {{ success: boolean; message; status: number }}
 */
export function success(message) {
  return {
    status: 200,
    success: true,
    message,
  }
}
