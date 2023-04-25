import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  const getIssues = async () => {
    const { pb } = locals;
    try {
      return structuredClone(await pb.collection('issues').getList(1, 50));
    } catch (err) {
      console.error(err);
      throw error(500, 'Failed to get issues');
    }
  };

  return {
    issues: getIssues()
  };
};
