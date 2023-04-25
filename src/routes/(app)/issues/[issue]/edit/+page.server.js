import { error } from '@sveltejs/kit';

export const actions = {
  update: async function ({ request, locals, params }) {
    const { pb, user } = locals;
    const formData = await request.formData();

    const issue = {
      title: formData.get('title'),
      description: formData.get('description') || '',
      user: user.id
    };

    try {
      await pb.collection('issues').update(params.issue, issue);
    } catch (err) {
      console.error(err);
      throw error(500, 'Failed to update issue');
    }

    return {
      success: true
    };
  }
};
