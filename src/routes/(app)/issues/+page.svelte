<script>
  import { Table, tableMapperValues } from '@skeletonlabs/skeleton'
  import { readableDate } from '$lib/helpers.js'
  import Pages from '$lib/components/Pages.svelte'
  import { Icon, Plus } from 'svelte-hero-icons'

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

<div class="mb-8 flex flex-wrap items-center">
  <h1 class="flex-grow">Issues</h1>
  <a href="/issues/new" class="ml-4 btn variant-filled-primary">
    <Icon src={Plus} class="w-4 h-4 mr-2" />
    New Issue
  </a>
</div>

<Table source={tableSource} interactive={true} on:selected={handleSelect} />

<br />

<Pages
  currentPage={data?.issues.page}
  pageSize={data?.issues.perPage}
  totalItems={data?.issues.totalItems}
/>
