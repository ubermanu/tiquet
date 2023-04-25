import { error } from '@sveltejs/kit';

export const actions = {
  /**
   * @param locals
   * @param request
   * @returns {Promise<{success: boolean, message: string}>}
   */
  updateEmail: async ({ locals, request }) => {
    const { pb, user } = locals;
    const formData = await request.formData();
    const email = formData.get('email');

    if (email === user?.email) {
      throw error(400, 'This is already your email address');
    }

    try {
      await pb.collection('users').requestEmailChange(email);
    } catch (err) {
      console.error(err);
      throw error(500, 'Something went wrong');
    }

    return {
      success: true,
      message: 'Check your email for a link to confirm your new email address'
    };
  },

  /**
   * @param locals
   * @returns {Promise<{success: boolean, message: string}>}
   */
  requestNewPassword: async ({ locals }) => {
    const { pb, user } = locals;

    try {
      await pb.collection('users').requestPasswordReset(user?.email);
    } catch (err) {
      console.error(err);
      throw error(500, 'Something went wrong');
    }

    return {
      success: true,
      message: 'Check your email for a link to reset your password'
    };
  }
};
