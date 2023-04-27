<script>
  import { Eye, Icon, Pencil, Plus, Trash } from 'svelte-hero-icons'
  import confirm from '$lib/actions/confirm.js'
  import CollectionTable from '$lib/components/CollectionTable.svelte'

  export let data
</script>

<div class="mb-8 flex flex-wrap items-center">
  <h1 class="flex-grow">Issues</h1>
  <a href="/issues/new" class="ml-4 btn variant-filled-primary">
    <Icon src={Plus} class="w-4 h-4 mr-2" />
    New Issue
  </a>
</div>

<CollectionTable
  searchResults={data?.issues}
  head={['Title', 'Created At', ' Updated At']}
  body={['title', 'created', 'updated']}
>
  <svelte:fragment slot="actions" let:id>
    <a class="btn variant-ghost btn-xs" href={`/issues/${id}`} title="View">
      <Icon src={Eye} class="w-4 h-4 mr-1" />
    </a>
    <a
      class="btn variant-ghost btn-xs"
      href={`/issues/${id}/edit`}
      title="Edit"
    >
      <Icon src={Pencil} class="w-4 h-4 mr-1" />
    </a>
    <a
      class="btn variant-ghost-error btn-xs"
      href={`/issues/${id}/delete`}
      title="Delete"
      use:confirm={'Are you sure you want to delete this issue?'}
    >
      <Icon src={Trash} class="w-4 h-4 mr-1" />
    </a>
  </svelte:fragment>
</CollectionTable>
