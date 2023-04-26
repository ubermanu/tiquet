<script>
  import confirm from '$lib/actions/confirm'
  import { Icon, Pencil, Trash } from 'svelte-hero-icons'

  export let data
</script>

<h1 class="text-3xl mb-4">{data?.issue?.title}</h1>

<div>{@html data?.issue?.description}</div>

<div class="btn-group variant-filled mt-6">
  <a href="/issues/{data?.issue?.id}/edit" class="btn">
    <Icon src={Pencil} class="mr-2 w-4 h-4" />
    Edit
  </a>
  <a
    href="/issues/{data?.issue?.id}/delete"
    class="btn"
    use:confirm={'Are you sure you want to delete this issue?'}
  >
    <Icon src={Trash} class="mr-2 w-4 h-4" />
    Delete
  </a>
</div>

<hr class="my-4" />

<!-- Render comments -->
