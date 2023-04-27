import { error } from '@sveltejs/kit'

/** @type {import('./$types').Load} */
export const load = async ({ params, locals }) => {
  const getUser = async () => {
    const { pb } = locals
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
