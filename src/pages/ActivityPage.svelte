<script>
  import activities from '../stores/activities'
</script>

<div class="container">
  <h1 class="title is-1">Activity</h1>
  {#if $activities.length > 0}
    <nav class="panel">
      {#each $activities.reverse() as activity}
        <div class="panel-block">
          {#if activity.icon}
            <span class="panel-icon">
              <i class="{activity.icon}" aria-hidden="true"></i>
            </span>
          {/if}
          {activity.body}
        </div>
      {/each}
    </nav>
  {:else}
    <article class="message">
      <div class="message-body">
        There is no activity logged for this project
      </div>
    </article>
  {/if}
</div>
