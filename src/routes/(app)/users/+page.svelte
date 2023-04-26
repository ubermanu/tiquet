<script>
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton'
  import { readableDate } from '$lib/helpers.js'
  import Pages from '$lib/components/Pages.svelte'

  export let data

  let source = data?.users.items || []

  // Transform dates to human-readable format
  source = source.map((item) => ({
    ...item,
    created: readableDate(item.created),
    updated: readableDate(item.updated),
  }))

  /** @type {import('@skeletonlabs/skeleton').TableSource} */
  $: tableSource = {
    head: ['Name', 'Email', 'Created At', 'Updated At'],
    body: tableMapperValues(source, ['name', 'email', 'created', 'updated']),
    meta: tableMapperValues(source, ['id']),
  }

  function handleSelect(event) {
    const [id] = event.detail
    window.location.href = `/users/${id}`
  }
</script>

<h1 class="mb-8">Users</h1>

<Table source={tableSource} interactive={true} on:selected={handleSelect} />

<br />

<Pages
  currentPage={data?.users.page}
  pageSize={data?.users.perPage}
  totalItems={data?.users.totalItems}
/>
