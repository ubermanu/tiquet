import { error } from '@sveltejs/kit'

/** @type {import('./$types').Load} */
export const load = async ({ locals, url }) => {
  const getIssues = async () => {
    const { pb } = locals
    try {
      const page = url.searchParams.get('offset') || 1
      const limit = url.searchParams.get('limit') || 10
      console.log('page', page, 'limit', limit)
      return structuredClone(
        await pb.collection('issues').getList(+page, +limit)
      )
    } catch (err) {
      console.error(err)
      throw error(500, 'Failed to get issues')
    }
  }

  return {
    issues: getIssues(),
  }
}
