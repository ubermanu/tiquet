import { streamed } from '$lib/helpers.js'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, locals }) => {
  const { pb } = locals
  const userId = params.id

  const getIssues = async () => {
    return structuredClone(
      await pb.collection('issues').getList(1, 10, {
        filter: `user = "${userId}"`,
        sort: '+updated',
      })
    )
  }

  const getComments = async () => {
    return structuredClone(
      await pb.collection('comments').getList(1, 10, {
        filter: `user = "${userId}"`,
        sort: '+updated',
        expand: 'issue',
      })
    )
  }

  return {
    streamed: {
      issues: streamed(getIssues),
      comments: streamed(getComments),
    },
  }
}
