import { redirect } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ locals }) => {
  throw redirect(303, '/settings/profile')
}
