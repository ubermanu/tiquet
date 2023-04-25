import { fail, redirect } from '@sveltejs/kit'

/** @type {import('./$types').Actions} */
export const actions = {
  /**
   * @param locals
   * @param {Request} request
   * @returns {any}
   */
  login: async ({ locals, request }) => {
    const formData = await request.formData()
    const { pb } = locals

    const email = formData.get('email')
    const password = formData.get('password')

    try {
      await pb.collection('users').authWithPassword(email, password)
    } catch (err) {
      console.error(err)
      return fail(err.status, { message: err.message })
    }

    throw redirect(303, '/')
  },
}
