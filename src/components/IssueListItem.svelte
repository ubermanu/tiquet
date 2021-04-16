<script>
  import { toggleIssue, deleteIssue } from '../stores/issues'

  export let issue
</script>

<div class="card mb-4">
  <div class="card-content">
    <div class="columns">
      <div class="column">
        <label class="checkbox">
          <input type="checkbox" class="mr-3" bind:checked={issue.complete} on:change={() => toggleIssue(issue)} />
          <span class="is-size-5" class:is-strike={issue.complete}>{issue.title}</span>
        </label>
      </div>
      <div class="column is-one-fifth">
        <div class="buttons">
          <a href="#/issues/{issue.id}" class="button is-small is-light">Show</a>
          <a href="#/issues/{issue.id}/edit" class="button is-small is-light">Edit</a>
          <button class="button is-small is-light is-danger" on:click={() => deleteIssue(issue)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
