import { pagination } from '$lib/pocketbase.js'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals, url }) => {
  const { pb } = locals
  const { offset, limit } = pagination(url)

  const getIssues = async () => {
    return structuredClone(
      await pb.collection('issues').getList(offset, limit, {
        sort: '-created',
      })
    )
  }

  return {
    issues: getIssues(),
  }
}
