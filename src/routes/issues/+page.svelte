<script>
  import confirm from '$lib/actions/confirm';
  import { Eye, Icon, Pencil, Trash } from 'svelte-hero-icons';

  export let data;
</script>

<div class="w-full h-full">
  <h2 class="text-3xl font-bold mb-4">Issues</h2>
  {#if data?.issues}
    <ul class="list-reset flex flex-col space-y-4">
      {#each data?.issues.items as issue}
        <li class="border-gray-500 border-2 p-4 rounded-lg flex items-center">
          <a class="flex-grow" href="/issues/{issue.id}">{issue.title}</a>
          <div class="btn-group">
            <a class="btn btn-sm" href="/issues/{issue.id}">
              <Icon src={Eye} class="w-4 h-4" />
            </a>
            <a class="btn btn-sm" href="/issues/{issue.id}/edit">
              <Icon src={Pencil} class="w-4 h-4" />
            </a>
            <a
              class="btn btn-sm"
              href="/issues/{issue.id}/delete"
              use:confirm={'Are you sure you want to delete this issue?'}
            >
              <Icon src={Trash} class="w-4 h-4" />
            </a>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>
