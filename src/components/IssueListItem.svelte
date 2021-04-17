<script>
  import { toggleIssue, deleteIssue } from '../stores/issues'

  export let issue
</script>

<style>
    .is-done {
        opacity: 0.5;
    }

    .is-strike {
        text-decoration: line-through;
    }

    .card-actions {
        flex-basis: auto;
        flex-grow: 0;
    }
</style>

<div class="card mb-4" class:is-done={issue.complete}>
  <div class="card-content">
    <div class="columns">
      <div class="column">
        <label class="checkbox">
          <input type="checkbox" class="mr-3" bind:checked={issue.complete} on:click={() => toggleIssue(issue)} />
          <span class="is-size-5" class:is-strike={issue.complete}>{issue.title}</span>
        </label>
      </div>
      <div class="column card-actions">
        <div class="buttons">
          <a href="#/issues/{issue.id}" class="button is-small is-light" title="Show">
            <i class="far fa-eye"></i>
          </a>
          <a href="#/issues/{issue.id}/edit" class="button is-small is-light" title="Edit">
            <i class="fa fa-pen"></i>
          </a>
          <button class="button is-small is-light is-danger" on:click={() => deleteIssue(issue)} title="Delete">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
