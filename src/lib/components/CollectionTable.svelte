<script>
  import { readableDate } from '$lib/helpers.js'
  import { tableMapperValues } from '@skeletonlabs/skeleton'
  import Pages from '$lib/components/Pages.svelte'

  export let searchResults = {
    items: [],
    page: 1,
    perPage: 10,
    totalItems: 0,
  }

  export let pagination = true

  export let head = ['ID', 'Created At', 'Updated At']
  export let body = ['id', 'created', 'updated']

  const items = searchResults.items.map((item) => ({
    ...item,
    created: readableDate(item.created),
    updated: readableDate(item.updated),
  }))

  /** @type {import('@skeletonlabs/skeleton').TableSource} */
  $: tableSource = {
    head: head,
    body: tableMapperValues(items, body),
    meta: tableMapperValues(items, ['id']),
  }
</script>

<div class="table-container ">
  <table class="table table-hover">
    <thead>
      <tr>
        {#each tableSource.head as head}
          <th>{head}</th>
        {/each}
        {#if $$slots.actions}
          <th>Actions</th>
        {/if}
      </tr>
    </thead>
    <tbody>
      {#each tableSource.body as row, i}
        <tr>
          {#each row as cell}
            <td>{cell}</td>
          {/each}
          {#if $$slots.actions}
            <td>
              <div class="flex gap-2 items-center">
                <slot name="actions" id={tableSource.meta[i][0]} />
              </div>
            </td>
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<br />

{#if pagination}
  <Pages
    currentPage={searchResults.page}
    pageSize={searchResults.perPage}
    totalItems={searchResults.totalItems}
  />
{/if}
