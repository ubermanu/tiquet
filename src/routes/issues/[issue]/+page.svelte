<script>
  import confirm from '$lib/actions/confirm';
  import { Icon, Pencil, Trash } from 'svelte-hero-icons';
  export let data;
</script>

<div class="w-full h-full">
  <h2 class="text-3xl font-bold mb-4">{data?.issue?.title}</h2>
  <div>{@html data?.issue?.description}</div>
  <div class="toolbar btn-group mt-6">
    <a href="/issues/{data?.issue?.id}/edit" class="btn btn-sm">
      <Icon src={Pencil} class="mr-2 w-4 h-4" />
      Edit
    </a>
    <a
      href="/issues/{data?.issue?.id}/delete"
      class="btn btn-sm"
      use:confirm={'Are you sure you want to delete this issue?'}
    >
      <Icon src={Trash} class="mr-2 w-4 h-4" />
      Delete
    </a>
  </div>
</div>

<div class="divider" />

<!-- Render comments -->
