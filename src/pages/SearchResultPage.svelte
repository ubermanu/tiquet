<script>
  import { findIssuesByKeyword } from '../stores/issues'
  import IssueListItem from '../components/IssueListItem.svelte'

  export let params = {}
  let keyword = ''
  let results = []

  $: {
    keyword = params?.query || ''
    results = findIssuesByKeyword(keyword)
  }
</script>
<div class="container">
  <h1 class="title is-1">Search: "{keyword}"</h1>
  {#each results as issue}
    <IssueListItem issue={issue} />
  {/each}
  {#if results.length === 0}
    <article class="message">
      <div class="message-body">
        No results found
      </div>
    </article>
  {/if}
</div>
