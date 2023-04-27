<script>
  import { Eye, Icon, Pencil, Plus, Trash } from 'svelte-hero-icons'
  import { tableMapperValues } from '@skeletonlabs/skeleton'
  import { readableDate } from '$lib/helpers.js'
  import Pages from '$lib/components/Pages.svelte'
  import confirm from '$lib/actions/confirm.js'

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
</script>

<div class="mb-8 flex flex-wrap items-center">
  <h1 class="flex-grow">Issues</h1>
  <a href="/issues/new" class="ml-4 btn variant-filled-primary">
    <Icon src={Plus} class="w-4 h-4 mr-2" />
    New Issue
  </a>
</div>

<div class="table-container ">
  <table class="table table-hover">
    <thead>
      <tr>
        {#each tableSource.head as head}
          <th>{head}</th>
        {/each}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each tableSource.body as row, i}
        <tr>
          {#each row as cell}
            <td>{cell}</td>
          {/each}
          <td>
            <div class="flex gap-2 items-center">
              <a
                class="btn variant-ghost btn-xs"
                href={`/issues/${tableSource.meta[i][0]}`}
                title="View"
              >
                <Icon src={Eye} class="w-4 h-4 mr-1" />
              </a>
              <a
                class="btn variant-ghost btn-xs"
                href={`/issues/${tableSource.meta[i][0]}/edit`}
                title="Edit"
              >
                <Icon src={Pencil} class="w-4 h-4 mr-1" />
              </a>
              <a
                class="btn variant-ghost-error btn-xs"
                href={`/issues/${tableSource.meta[i][0]}/delete`}
                title="Delete"
                use:confirm={'Are you sure you want to delete this issue?'}
              >
                <Icon src={Trash} class="w-4 h-4 mr-1" />
              </a>
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<br />

<Pages
  currentPage={data?.issues.page}
  pageSize={data?.issues.perPage}
  totalItems={data?.issues.totalItems}
/>
