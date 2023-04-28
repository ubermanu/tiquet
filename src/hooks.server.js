import { createPocketBase } from '$lib/pocketbase.js'
import { redirect } from '@sveltejs/kit'

const protectedRoutes = [
  /^\/$/,
  /^\/settings/,
  /^\/notifications/,
  /^\/users/,
  /^\/issues/,
]

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const pb = createPocketBase()
  event.locals.pb = pb

  pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

  if (pb.authStore.isValid) {
    event.locals.user = structuredClone(pb.authStore.model)
  } else {
    event.locals.user = undefined
  }

  if (
    protectedRoutes.some((route) => route.test(event.url.pathname)) &&
    !event.url.pathname.startsWith('/login')
  ) {
    if (!event.locals.user) {
      throw redirect(303, '/login')
    }
  }

  const response = await resolve(event)

  // seth pb_auth cookie
  response.headers.set(
    'set-cookie',
    pb.authStore.exportToCookie({ secure: false })
  )

  return response
}
