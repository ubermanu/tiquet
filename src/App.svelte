<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Navbar from './Navbar.svelte'
  import ToastRenderer from './ToastRenderer.svelte'
</script>

<style>
    @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";

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
  <ToastRenderer />
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
