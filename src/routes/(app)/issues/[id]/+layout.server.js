import { error } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, locals }) => {
  const { pb } = locals

  const getIssue = async () => {
    try {
      return structuredClone(await pb.collection('issues').getOne(params.id))
    } catch (err) {
      console.error(err)
      throw error(404, 'Issue not found')
    }
  }

  return {
    issue: getIssue(),
  }
}
