import { fail } from '@sveltejs/kit'

export const actions = {
  update: async function ({ request, locals, params }) {
    const { pb, user } = locals
    const formData = await request.formData()

    const issue = {
      title: formData.get('title'),
      description: formData.get('description') || '',
      user: user.id,
    }

    try {
      await pb.collection('issues').update(params.id, issue)
    } catch (err) {
      console.error(err)
      return fail(err.status, { message: err.message })
    }

    return {
      success: true,
      message: 'Issue updated',
    }
  },
}
