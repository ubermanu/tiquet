<script>
  import Input from '$lib/components/Form/Input.svelte'
  import Alert from '$lib/components/Alert.svelte'
  import Wysiwyg from '$lib/components/Form/Wysiwyg.svelte'

  export let form
  export let data
</script>

<form action="?/update" method="POST">
  <fieldset class="fieldset">
    <legend class="legend">Edit: "{data?.issue?.title}"</legend>
    {#if form?.message}
      <Alert level={form?.success ? 'success' : 'error'}>
        {form?.message}
      </Alert>
    {/if}
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
