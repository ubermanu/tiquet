<script>
  import { Eye, Icon } from 'svelte-hero-icons'
  import CollectionTable from '$lib/components/CollectionTable.svelte'

  export let data
</script>

<h1 class="mb-8">Issues</h1>
<p class="mb-8">
  The following issues are currently open. Click on an issue to view it in
  detail.
</p>

<CollectionTable
  searchResults={data?.issues}
  head={['Title', 'Created At', ' Updated At']}
  body={['title', 'created', 'updated']}
  pagination={false}
>
  <svelte:fragment slot="actions" let:id>
    <a class="btn variant-ghost btn-xs" href={`/issues/${id}`} title="View">
      <Icon src={Eye} class="w-4 h-4 mr-1" />
    </a>
  </svelte:fragment>
</CollectionTable>
