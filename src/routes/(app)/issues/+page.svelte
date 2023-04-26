<script>
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton'
  import { readableDate } from '$lib/helpers.js'
  import Pages from '$lib/components/Pages.svelte'

  export let data

  let source = data?.issues.items || []

  // Transform dates to human-readable format
  source = source.map((item) => ({
    ...item,
    created: readableDate(item.created),
    updated: readableDate(item.updated),
  }))

  /** @type {import('@skeletonlabs/skeleton').TableSource} */
  $: tableSource = {
    head: ['Title', 'Created At', 'Updated At'],
    body: tableMapperValues(source, ['title', 'created', 'updated']),
    meta: tableMapperValues(source, ['id']),
  }

  function handleSelect(event) {
    const [id] = event.detail
    window.location.href = `/issues/${id}`
  }
</script>

<h1 class="text-3xl font-bold mb-4">Issues</h1>

<Table source={tableSource} interactive={true} on:selected={handleSelect} />

<br />

<Pages
  currentPage={data?.issues.page}
  pageSize={data?.issues.perPage}
  totalItems={data?.issues.totalItems}
/>
