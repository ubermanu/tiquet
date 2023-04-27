import { error } from '@sveltejs/kit'

/** @type {import('./$types').Load} */
export const load = async ({ locals }) => {
  const getIssues = async () => {
    const { pb } = locals
    try {
      return structuredClone(
        await pb.collection('issues').getList(1, 10, {
          sort: '-updated',
        })
      )
    } catch (err) {
      console.error(err)
      return error(500, 'Failed to get issues')
    }
  }

  return {
    issues: getIssues(),
  }
}
