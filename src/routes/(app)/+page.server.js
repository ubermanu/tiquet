import { error } from '@sveltejs/kit'

/** @type {import('./$types').Load} */
export const load = async ({ locals }) => {
  const getIssues = async () => {
    const { pb } = locals
    try {
      // TODO: Get the latest issues from pb
      return structuredClone(await pb.collection('issues').getList(1, 10))
    } catch (err) {
      console.error(err)
      throw error(500, 'Failed to get issues')
    }
  }

  return {
    issues: getIssues(),
  }
}
