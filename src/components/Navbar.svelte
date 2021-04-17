<script>
  import SearchForm from './NavbarSearchForm.svelte'

  let opened = false
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
      <span class="is-size-4">🦟</span>
    </div>
    <a href role="button" aria-label="menu" aria-expanded="false"
       class="navbar-burger burger"
       class:is-active={opened}
       on:click|preventDefault={() => opened = !opened}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu" class:is-active={opened}>
    <div class="navbar-start">
      <a href="#/issues/new" class="navbar-item">
        <span class="icon mr-2">
          <i class="fa fa-plus"></i>
        </span>
        <span>New issue</span>
      </a>
      <a href="#/issues" class="navbar-item">
        <span class="icon mr-2">
          <i class="fa fa-list"></i>
        </span>
        <span>Issues</span>
      </a>
      <a href="#/activity" class="navbar-item">
        <span class="icon mr-2">
          <i class="far fa-chart-bar"></i>
        </span>
        <span>Activity</span>
      </a>
      <a href="#/settings" class="navbar-item">
        <span class="icon mr-2">
          <i class="fas fa-cog"></i>
        </span>
        <span>Settings</span>
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <SearchForm />
      </div>
    </div>
  </div>
</nav>
