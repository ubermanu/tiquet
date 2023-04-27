<script>
  import confirm from '$lib/actions/confirm'
  import { Icon, Pencil, Trash } from 'svelte-hero-icons'
  import { ProgressRadial } from '@skeletonlabs/skeleton'
  import Wysiwyg from '$lib/components/Form/Wysiwyg.svelte'
  import Alert from '$lib/components/Alert.svelte'
  import Comment from '$lib/components/Comment.svelte'
  import Pages from '$lib/components/Pages.svelte'

  export let data
</script>

<div class="flex flex-wrap items-center mb-8 gap-4">
  <h1 class="flex-grow">{data?.issue?.title}</h1>
  <div class="flex gap-2">
    <a
      href="/issues/{data?.issue?.id}/edit"
      class="btn variant-filled btn-sm xl:btn-md"
    >
      <Icon src={Pencil} class="mr-2 w-4 h-4" />
      Edit
    </a>
    <a
      href="/issues/{data?.issue?.id}/delete"
      class="btn variant-filled-error btn-sm xl:btn-md"
      use:confirm={'Are you sure you want to delete this issue?'}
    >
      <Icon src={Trash} class="mr-2 w-4 h-4" />
      Delete
    </a>
  </div>
</div>

<div>{@html data?.issue?.description}</div>

<hr class="my-8" />

<h2 class="unstyled text-xl mb-4" id="comments">Comments</h2>

{#await data?.streamed.comments}
  <div class="flex flex-col gap-4 items-center">
    <ProgressRadial value={undefined} width="w-8" />
    <p class="text-gray-500">Loading comments...</p>
  </div>
{:then commentList}
  {#if commentList.totalItems}
    <div class="space-y-4">
      {#each commentList.items as comment}
        <Comment {comment} />
      {/each}
    </div>
    <br />
    <Pages
      amountText="comments"
      totalItems={commentList.totalItems}
      pageSize={commentList.perPage}
      currentPage={commentList.page}
    />
  {/if}

  <form action="?/postComment" method="POST" class="form mt-8">
    <fieldset class="fieldset">
      <Wysiwyg name="content" label="Message" />
      <button class="btn variant-filled" type="submit">Post a comment</button>
    </fieldset>
  </form>
{:catch err}
  <Alert level="error">{err.message}</Alert>
{/await}
