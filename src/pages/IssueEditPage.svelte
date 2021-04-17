<script>
  import NotFoundPage from './NotFoundPage.svelte'
  import { findIssueById, saveIssue } from '../stores/issues'
  import { writable } from 'svelte/store'
  import { push } from 'svelte-spa-router'
  import { addSuccessMessage } from '../stores/messages'

  export let params = {}
  const issue = findIssueById(params.id)
  let update = writable({ ...issue })

  function handleSubmit() {
    saveIssue({ ...issue, ...$update })
    addSuccessMessage('The issue has been saved')
    push(`#/issues/${issue.id}`)
  }
</script>

{#if issue}
  <div class="container">
    <h1 class="title is-1">Edit an issue</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input name="title" class="input" type="text" required bind:value={$update.title} />
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea name="description" class="textarea" bind:value={$update.description}></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Save</button>
        </div>
        <div class="control">
          <a href="#/issues/{issue.id}" class="button is-link is-light">Cancel</a>
        </div>
      </div>
    </form>
  </div>
{:else}
  <NotFoundPage />
{/if}
