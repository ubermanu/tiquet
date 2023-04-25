import { error } from '@sveltejs/kit';

export const actions = {
  updateProfile: async ({ locals, request }) => {
    const { pb, user } = locals;
    const formData = await request.formData();

    if (formData.get('avatar').size === 0) {
      formData.delete('avatar');
    }

    try {
      const { name, avatar } = await pb.collection('users').update(user?.id, formData);
      locals.user.name = name;
      locals.user.avatar = avatar;
    } catch (err) {
      console.error(err);
      throw error(500, 'Something went wrong');
    }

    return {
      success: true
    };
  }
};
