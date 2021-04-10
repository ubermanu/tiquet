<script>
  import {
    Grid,
    Row,
    Column,
    InlineNotification,
    NotificationActionButton
  } from 'carbon-components-svelte'
  import { fetchApi } from '../../api'
</script>

<h1>Issues</h1>

{#await fetchApi('issues')}
  <p>loading</p>
{:then issues}
  {#if issues.length > 0}
    {#each issues as issue}
      <div class="card mb-4">
        <div class="card-content">
          <div class="columns">
            <div class="column">
              <label class="checkbox">
                <input
                  type="checkbox"
                  class="mr-3"
                  bind:checked={issue.complete}
                />
                <span class="is-size-5" class:is-strike={issue.complete}
                  >{issue.title}</span
                >
              </label>
            </div>
            <div class="column is-one-fifth">
              <div class="buttons">
                <a href="#/issues/{issue.id}" class="button is-small is-light"
                  >Show</a
                >
                <a
                  href="#/issues/{issue.id}/edit"
                  class="button is-small is-light">Edit</a
                >
                <button class="button is-small is-light is-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  {:else}
    <InlineNotification kind="info" subtitle="No issues found" hideCloseButton>
      <div slot="actions">
        <NotificationActionButton href="#/issues/new">
          <span>Create a new one</span>
        </NotificationActionButton>
      </div>
    </InlineNotification>
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
