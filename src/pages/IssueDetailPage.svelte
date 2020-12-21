<script>
  import NotFoundPage from './NotFoundPage.svelte'
  import { findIssueById } from '../stores/issues'

  export let params = {}
  $: issue = findIssueById(params.id)
</script>

{#if issue}
  <div class="container">
    <h1 class="title is-1">{issue.title}</h1>
    <article class="content">
      <p>{issue.description}</p>
    </article>
  </div>
{:else}
  <NotFoundPage />
{/if}
