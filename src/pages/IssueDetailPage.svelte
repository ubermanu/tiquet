<script>
  import NotFoundPage from './NotFoundPage.svelte'
  import issueStore from '../stores/issueStore'

  export let params = {}
  $: issue = issueStore.find(params.id)
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
