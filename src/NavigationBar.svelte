<script>
  // import NavigationSearchForm from './NavigationSearchForm'
  let opened = false
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
      <span class="is-size-4">🦟</span>
    </div>
    <a role="button" aria-label="menu" aria-expanded="false"
       class="navbar-burger burger" class:is-active={opened} on:click={() => opened = !opened}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu" class:is-active={opened}>
    <div class="navbar-start">
      <a href="/issues/new" class="navbar-item">
        <span class="icon">
          <i class="fa fa-plus"></i>
        </span>
        {' '}
        <span>New issue</span>
      </a>
      <a href="/issues" class="navbar-item">
        <span class="icon">
          <i class="fa fa-list"></i>
        </span>
        {' '}
        <span>Issues</span>
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <!--        <NavigationSearchForm />-->
      </div>
    </div>
  </div>
</nav>
