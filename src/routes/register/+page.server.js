import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  /**
   * @param locals
   * @param {Request} request
   * @returns {*}
   */
  register: async ({ locals, request }) => {
    const formData = await request.formData();
    const { pb } = locals;

    const email = formData.get('email');
    const password = formData.get('password');
    const passwordConfirm = formData.get('passwordConfirm');

    try {
      await pb.collection('users').create({ email, password, passwordConfirm });
      await pb.collection('users').requestVerification(email);
    } catch (err) {
      console.error(err);
      throw error(500, 'Something went wrong');
    }

    throw redirect(303, '/login');
  }
};
