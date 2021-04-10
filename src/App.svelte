<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Navbar from './components/Navbar.svelte'
  import ToastRenderer from './components/ToastRenderer.svelte'
</script>

<main>
  <Navbar />
  <ToastRenderer />
  <section class="section">
    <Router {routes} />
  </section>
  <footer class="footer">
    <span>
      Powered by
      <a href="https://github.com/ubermanu/tiquet" target="_blank">Tiquet</a>
    </span>
  </footer>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
  }

  .footer {
    margin-top: auto;
  }
</style>
