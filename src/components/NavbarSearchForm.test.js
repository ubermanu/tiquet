import { mount } from 'dainte'
import { tick } from 'svelte'

test('the search form should encode its params', async () => {
  const { window, document } = await mount('./src/components/NavbarSearchForm.svelte')

  const input = document.querySelector('.input')
  input.value = 'random string test'

  const event = new window.Event('input')
  input.dispatchEvent(event)

  await tick()

  document.querySelector('form').submit()

  await tick()

  expect(window.location.hash).toBe(`#/search/random%20string%20test`)
})
