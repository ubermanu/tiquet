import { pagination } from '$lib/pocketbase.js'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals, url }) => {
  const { pb } = locals
  const { offset, limit } = pagination(url)

  const getUsers = async () => {
    return structuredClone(await pb.collection('users').getList(offset, limit))
  }

  return {
    users: getUsers(),
  }
}
