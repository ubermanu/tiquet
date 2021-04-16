<script>
  import { findIssuesByKeyword } from '../stores/issues'

  export let params = {}
  let keyword = ''

  $: keyword = params?.query || ''
  const results = findIssuesByKeyword(keyword)
</script>
<div class="container">
  <h1 class="title is-1">Search: "{keyword}"</h1>
  {#each results as issue}
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
  {#if results.length === 0}
    <article class="message">
      <div class="message-body">
        No results found
      </div>
    </article>
  {/if}
</div>
