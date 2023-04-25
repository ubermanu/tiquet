import { fail } from '@sveltejs/kit'

/** @type {import('./$types').Actions} */
export const actions = {
  /**
   * @param locals
   * @param {Request} request
   * @returns {any}
   */
  register: async ({ locals, request }) => {
    const formData = await request.formData()
    const { pb } = locals

    const email = formData.get('email')
    const password = formData.get('password')
    const passwordConfirm = formData.get('passwordConfirm')

    if (password !== passwordConfirm) {
      return fail(400, { message: 'Passwords do not match.' })
    }

    try {
      await pb.collection('users').create({ email, password, passwordConfirm })
      await pb.collection('users').requestVerification(email)
    } catch (err) {
      console.error(err)
      return fail(err.status, { message: err.message })
    }

    return {
      success: true,
      message: 'Please check your email for a verification link.',
    }
  },
}
