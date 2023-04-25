import { createPocketBase } from '$lib/pocketbase.js'
import { redirect } from '@sveltejs/kit'

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
    event.url.pathname === '/' ||
    event.url.pathname.startsWith('/settings') ||
    event.url.pathname.startsWith('/issues')
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
