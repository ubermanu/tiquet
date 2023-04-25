<script>
  import { Icon, Eye, Pencil } from 'svelte-hero-icons'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<h1 class="text-3xl mb-4">Issues</h1>
<p class="mb-4">
  The following issues are currently open. Click on an issue to view it in
  detail.
</p>
{#if data?.issues}
  <ul class="list-reset flex flex-col space-y-4">
    {#each data?.issues.items as issue}
      <li class="border-2 p-4 rounded-lg flex items-center">
        <div class="flex-grow">
          <p>{issue.title}</p>
        </div>
        <div class="flex gap-2">
          <a
            class="btn variant-ghost btn-sm"
            href="/issues/{issue.id}"
            title="View"
          >
            <Icon src={Eye} class="w-4 h-4" />
          </a>
          <a
            class="btn variant-ghost btn-sm"
            href="/issues/{issue.id}/edit"
            title="Edit"
          >
            <Icon src={Pencil} class="w-4 h-4" />
          </a>
        </div>
      </li>
    {/each}
  </ul>
{/if}
