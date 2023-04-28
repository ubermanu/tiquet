/** @type {import('./$types').Load} */
export const load = async ({ locals }) => {
  const { pb } = locals

  const getIssues = async () => {
    return structuredClone(
      await pb.collection('issues').getList(1, 10, {
        sort: '-updated',
      })
    )
  }

  return {
    issues: getIssues(),
  }
}
