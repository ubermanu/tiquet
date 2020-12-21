<script>
  import NotFoundPage from './NotFoundPage.svelte'
  import { findIssueById, saveIssue } from '../stores/issues'

  export let params = {}
  $: issue = findIssueById(params.id)

  function handleSubmit() {
    saveIssue(issue)
  }
</script>

{#if issue}
  <div class="container">
    <h1 class="title is-1">Edit an issue</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input name="title" class="input" type="text" required bind:value={issue.title} />
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea name="description" class="textarea" bind:value={issue.description}></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Save</button>
        </div>
        <div class="control">
          <a href="#/issue/{issue.id}" class="button is-link is-light">Cancel</a>
        </div>
      </div>
    </form>
  </div>
{:else}
  <NotFoundPage />
{/if}
