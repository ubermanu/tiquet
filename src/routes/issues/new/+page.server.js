import { error } from '@sveltejs/kit';

export const actions = {
  create: async function ({ request, locals }) {
    const { pb, user } = locals;
    const formData = await request.formData();

    const issue = {
      title: formData.get('title'),
      description: formData.get('description') || '',
      user: user.id
    };

    try {
      await pb.collection('issues').create(issue);
    } catch (err) {
      console.error(err);
      throw error(500, 'Failed to create issue');
    }

    return {
      success: true
    };
  }
};
