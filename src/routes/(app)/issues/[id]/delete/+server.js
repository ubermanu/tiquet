import { redirect } from '@sveltejs/kit'

export const GET = async ({ locals, params }) => {
  const { pb } = locals
  await pb.collection('issues').delete(params.id)
  throw redirect(301, '/issues')
}
