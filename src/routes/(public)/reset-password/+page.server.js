/** @type {import('./$types').Actions} */
export const actions = {
  /**
   * @param locals
   * @param {Request} request
   * @returns {any}
   */
  resetPassword: async ({ locals, request }) => {
    const { pb } = locals

    const formData = await request.formData()
    const email = formData.get('email')

    try {
      await pb.collection('users').requestPasswordReset(email)
    } catch (err) {
      console.error(err)
    }

    return {
      success: true,
      message:
        'A password reset link has been sent to your email address if it exists in our system.',
    }
  },
}
