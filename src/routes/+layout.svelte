<script>
  import { setContext } from 'svelte'

  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'

  import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css'
  import '@skeletonlabs/skeleton/styles/all.css'
  import '../app.postcss'

  /** @type {import('./$types').PageData} */
  export let data

  setContext('authenticatedUser', data.user)
</script>

<svelte:head>
  <title>Tiquet</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <slot />
  </main>

  <Footer />
</div>
