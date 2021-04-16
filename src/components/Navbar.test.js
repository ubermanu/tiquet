import { mount } from 'dainte'
import { tick } from 'svelte'

test('the navbar should open when clicking the burger', async () => {
  const { window, document } = await mount('./src/components/Navbar.svelte')

  const event = new window.MouseEvent('click')
  document.querySelector('.navbar-burger').dispatchEvent(event)

  await tick()

  expect(document.querySelector('.navbar-menu').classList).toContain('is-active')
})
