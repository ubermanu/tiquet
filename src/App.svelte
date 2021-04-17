<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Navbar from './components/Navbar.svelte'
  import MessageRenderer from './components/MessageRenderer.svelte'
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .footer {
        margin-top: auto;
    }
</style>

<main>
  <Navbar />
  <MessageRenderer />
  <section class="section">
    <Router {routes} />
  </section>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Powered by <a href="https://github.com/ubermanu/tiquet" target="_blank">Tiquet</a>
      </p>
    </div>
  </footer>
</main>
