<script>
  import { readableDate } from '$lib/helpers.js'
  import { getUserAvatarUrl } from '$lib/pocketbase.js'

  export let comment
</script>

<div class="card p-2" id="comment-{comment.id}">
  <header class="card-header flex gap-4 items-center text-sm">
    <a
      class="unstyled hover:underline flex gap-2 items-center"
      href="/users/{comment?.user}"
    >
      <img
        class="rounded-full w-4 h-4"
        src={getUserAvatarUrl(comment?.expand.user)}
        alt
      />
      <span class="font-bold">{comment?.expand.user.name}</span>
      <span class="text-gray-500">&lt;{comment?.expand.user.email}&gt;</span>
    </a>
    <a class="unstyled hover:underline" href="#comment-{comment.id}">
      {readableDate(comment?.created)}
    </a>
  </header>
  <section class="p-4">{@html comment?.content}</section>
</div>
