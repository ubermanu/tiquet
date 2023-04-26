<script>
  import { Paginator, Table, tableMapperValues } from '@skeletonlabs/skeleton'
  import { readableDate } from '$lib/helpers.js'

  export let data

  let source = data?.issues?.items || []

  let page = {
    offset: 0,
    limit: 5,
    size: source.length,
    amounts: [1, 2, 5, 10],
  }

  // Transform dates to human-readable format
  source = source.map((item) => ({
    ...item,
    created: readableDate(item.created),
    updated: readableDate(item.updated),
  }))

  $: paginatedSource = source.slice(
    page.offset * page.limit, // start
    page.offset * page.limit + page.limit // end
  )

  /** @type {import('@skeletonlabs/skeleton').TableSource} */
  $: tableSource = {
    head: ['Title', 'Created At', 'Updated At'],
    body: tableMapperValues(paginatedSource, ['title', 'created', 'updated']),
    meta: tableMapperValues(paginatedSource, ['id']),
  }

  function handleSelect(event) {
    const [id] = event.detail
    window.location.href = `/issues/${id}`
  }

  console.log(data)
</script>

<h1 class="text-3xl font-bold mb-4">Issues</h1>

<Table source={tableSource} interactive={true} on:selected={handleSelect} />

<Paginator bind:settings={page} />
