<script>
  import Input from '$lib/components/Form/Input.svelte'
  import Wysiwyg from '$lib/components/Form/Wysiwyg.svelte'

  export let data
</script>

<h1 class="mb-8">Edit: "{data?.issue?.title}"</h1>

<div class="mb-8">
  <a href="/issues">&larr; Back to issues</a>
</div>

<form action="?/update" method="POST">
  <fieldset class="fieldset">
    <Input
      label="Title"
      name="title"
      required={true}
      value={data?.issue?.title}
    />
    <Wysiwyg
      label="Description"
      name="description"
      value={data?.issue?.description}
    />
    <button type="submit" class="btn variant-filled">Save</button>
  </fieldset>
</form>
