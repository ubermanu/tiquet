<script>
  import Header from '$components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import './styles.css';
</script>

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
