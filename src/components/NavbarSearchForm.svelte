<script>
  import { writable } from 'svelte/store'

  let search = writable('')

  // TODO: Fix search params
  function handleSubmit(e) {
    e.preventDefault()
    history.push(e.target.action + '/' + encodeURIComponent($search))
  }
</script>

<form action="#/search" on:submit={handleSubmit}>
  <div class="field">
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" name="q" placeholder="Find an issue..."
             aria-label="Search an issue using a keyword" required bind:value={$search} />
      <span class="icon is-small is-left">
        <i class="fas fa-search"></i>
      </span>
    </div>
  </div>
</form>
