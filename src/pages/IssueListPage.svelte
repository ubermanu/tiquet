<script>
  import issues from '../stores/issues'
  import IssueListItem from '../components/IssueListItem.svelte'
</script>

<div class="container">
  <h1 class="title is-1">Issues</h1>
  {#each $issues as issue}
    <IssueListItem issue={issue} />
  {/each}
  {#if $issues.length === 0}
    <article class="message">
      <div class="message-body">
        No issues found,
        <a href="#/issues/new">create a new one</a>
      </div>
    </article>
  {/if}
</div>
