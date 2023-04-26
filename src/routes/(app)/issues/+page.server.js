import { pagination } from '$lib/pocketbase.js'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').Load} */
export const load = async ({ locals, url }) => {
  const getIssues = async () => {
    const { pb } = locals
    try {
      const { offset, limit } = pagination(url)
      return structuredClone(
        await pb.collection('issues').getList(offset, limit)
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
