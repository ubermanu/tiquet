import { fail } from '$lib/pocketbase.js'

/** @type {import('./$types').Actions} */
export const actions = {
  create: async function ({ request, locals }) {
    const { pb, user } = locals
    const formData = await request.formData()

    const issue = {
      title: formData.get('title'),
      description: formData.get('description') || '',
      user: user.id,
    }

    try {
      await pb.collection('issues').create(issue)
    } catch (err) {
      console.error(err)
      return fail(err)
    }

    return {
      success: true,
      message: 'Issue created successfully',
    }
  },
}
