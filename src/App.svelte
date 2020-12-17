<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import NavigationBar from './NavigationBar.svelte'
</script>

<main>
  <NavigationBar />
  <!--    <ToastRenderer />-->
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
