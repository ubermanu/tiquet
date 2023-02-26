import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  /**
   * @param locals
   * @param {Request} request
   * @returns {*}
   */
  resetPassword: async ({ locals, request }) => {
    const { pb } = locals;

    const formData = await request.formData();
    const email = formData.get('email');

    try {
      await pb.collection('users').requestPasswordReset(email);
    } catch (err) {
      console.error(err);
    }

    return {
      success: true
    };
  }
};
