<script>
  import { setContext } from 'svelte';
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import './styles.css';

  /**
   * @type {import('./$types').PageData}
   */
  export let data;

  setContext('authenticatedUser', data.user);
</script>

<svelte:head>
  <title>Tiquet</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>
