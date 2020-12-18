<script>
  import queryString from 'query-string'
  import issueStore from '../stores/issueStore'

  const query = queryString.parse(location.search)
  const keyword = query.q || ''
  const issues = issueStore.findByKeyword(keyword)
</script>
<div class="container">
  <h1 class="title is-1">Search: "{keyword}"</h1>
  {#each issues as issue}
    <div class="card mb-4">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <label class="checkbox">
              <input type="checkbox" class="mr-3" bind:checked={issue.complete} />
              <span class="is-size-5" class:is-strike={issue.complete}>{issue.title}</span>
            </label>
          </div>
          <div class="column is-one-fifth">
            <div class="buttons">
              <a href="#/issue/${issue.id}" class="button is-small is-light">Show</a>
              <a href="#/issue/${issue.id}/edit" class="button is-small is-light">Edit</a>
              <button class="button is-small is-light is-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
  {#if issues.length === 0}
    <article class="message">
      <div class="message-body">
        No results found
      </div>
    </article>
  {/if}
</div>
