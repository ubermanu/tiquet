import { svelte } from 'vite-plugin-svelte'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  plugins: [svelte()],
  rollupDedupe: ['svelte'],
  optimizeDeps: {
    exclude: ['svelte-routing']
  }
}

export default config
