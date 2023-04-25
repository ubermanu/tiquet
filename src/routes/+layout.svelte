<script>
  import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css'
  import '@skeletonlabs/skeleton/styles/all.css'
  import '../app.postcss'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>Tiquet</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<slot />
