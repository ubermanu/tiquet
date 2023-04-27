import { pagination } from '$lib/pocketbase.js'
import { error, fail } from '@sveltejs/kit'

export const load = async ({ params, locals, url }) => {
  const getComments = async () => {
    const { pb } = locals
    try {
      const { offset, limit } = pagination(url, 5)
      return structuredClone(
        await pb.collection('comments').getList(offset, limit, {
          // filter: `issue == "${params.id}"`,
          expand: 'user',
          sort: '+created',
        })
      )
    } catch (err) {
      console.error(err)
      throw error(500, "Failed to get this issue's comments")
    }
  }

  return {
    streamed: {
      comments: getComments(),
    },
  }
}

export const actions = {
  postComment: async function ({ request, locals, params }) {
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

  deleteComment: async function ({ locals, params }) {
    const { pb } = locals
  },

  updateComment: async function ({ locals, params }) {
    const { pb } = locals
  },
}
