<script>
  import { Avatar } from '@skeletonlabs/skeleton'
  import { getUserAvatarUrl } from '$lib/pocketbase.js'
  import CollectionTable from '$lib/components/CollectionTable.svelte'
  import Alert from '$lib/components/Alert.svelte'
  import { Eye, Icon } from 'svelte-hero-icons'

  export let data
</script>

<h1 class="text-3xl mb-4">{data?.user?.name}</h1>

<Avatar src={getUserAvatarUrl(data?.user)} width="w-32" />

<hr class="my-8" />

<h2 class="unstyled text-xl mb-8">Issues</h2>

{#await data?.streamed.issues}
  <p>Loading...</p>
{:then issueList}
  <CollectionTable
    head={['Title', 'Created At', 'Updated At']}
    body={['title', 'created', 'updated']}
    searchResults={issueList}
    pagination={false}
  >
    <svelte:fragment slot="actions" let:id>
      <a class="btn btn-xs variant-ghost" href={`/issues/${id}`} title="View">
        <Icon src={Eye} class="w-4 h-4" />
      </a>
    </svelte:fragment>
  </CollectionTable>
{:catch err}
  <Alert level="warning">{err.message}</Alert>
{/await}
