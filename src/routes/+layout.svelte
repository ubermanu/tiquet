<script>
  import { setContext } from 'svelte'
  import Sidebar from '$components/Page/Sidebar.svelte'
  import Footer from '$components/Footer.svelte'
  import { AppShell } from '@skeletonlabs/skeleton'

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

<AppShell style="min-height: 100vh">
  <Sidebar slot="sidebarLeft" />
  <slot />
  <Footer slot="pageFooter" />
</AppShell>
