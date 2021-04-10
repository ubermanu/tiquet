const { defineConfig } = require('vite')
const svelte = require('@sveltejs/vite-plugin-svelte')

module.exports = defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  return {
    optimizeDeps: {
      include: ['clipboard-copy']
    },
    plugins: [svelte()],
    build: {
      minify: isProduction
    }
  }
})
