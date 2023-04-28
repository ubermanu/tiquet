import { error } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, locals }) => {
  const { pb } = locals

  const getUser = async () => {
    try {
      return structuredClone(await pb.collection('users').getOne(params.id))
    } catch (err) {
      console.error(err)
      throw error(404, 'User not found')
    }
  }

  return {
    user: getUser(),
  }
}
