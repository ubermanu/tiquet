import { error } from '@sveltejs/kit'

/** @type {import('./$types').Load} */
export const load = async ({ params, locals }) => {
  const getIssues = async () => {
    const { pb } = locals
    try {
      return structuredClone(
        await pb.collection('issues').getList(1, 10, {
          filter: '',
          sort: '+updated',
        })
      )
    } catch (err) {
      console.error(err)
      throw error(500, "Could not get the user's issues")
    }
  }

  const getComments = async () => {
    const { pb } = locals
    try {
      return structuredClone(
        await pb.collection('comments').getList(1, 10, {
          filter: '',
          sort: '+updated',
          expand: 'issue',
        })
      )
    } catch (err) {
      console.error(err)
      throw error(500, "Could not get the user's comments")
    }
  }

  return {
    streamed: {
      issues: getIssues(),
      comments: getComments(),
    },
  }
}
