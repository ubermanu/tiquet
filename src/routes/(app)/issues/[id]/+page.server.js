import { streamed } from '$lib/helpers.js'
import { pagination } from '$lib/pocketbase.js'
import { fail } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, locals, url }) => {
  const { pb } = locals
  const { offset, limit } = pagination(url, 5)

  const getComments = async () => {
    return structuredClone(
      await pb.collection('comments').getList(offset, limit, {
        filter: `issue = "${params.id}"`,
        expand: 'user',
        sort: '+created',
      })
    )
  }

  return {
    streamed: {
      comments: streamed(getComments),
    },
  }
}

/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
  postComment: async ({ request, locals, params }) => {
    const { pb, user } = locals
    const formData = await request.formData()

    const comment = {
      content: formData.get('content'),
      user: user.id,
      issue: params.id,
    }

    try {
      await pb.collection('comments').create(comment)
    } catch (err) {
      console.error(err)
      return fail(err.status, { message: err.message })
    }

    return {
      success: true,
      message: 'Message posted',
    }
  },

  deleteComment: async ({ locals, params }) => {
    const { pb } = locals
  },

  updateComment: async ({ locals, params }) => {
    const { pb } = locals
  },
}
