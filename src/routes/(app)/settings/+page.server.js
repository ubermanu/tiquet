import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
  throw redirect(303, '/settings/profile')
}
