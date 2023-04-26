import { error } from '@sveltejs/kit'

export const load = async ({ params, locals }) => {
  const getIssue = async () => {
    const { pb } = locals
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
