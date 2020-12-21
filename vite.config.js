import { svelte } from 'vite-plugin-svelte'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  plugins: [svelte()],
  rollupDedupe: ['svelte']
}

export default config
