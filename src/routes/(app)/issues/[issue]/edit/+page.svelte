<script>
  import Input from '$components/Form/Input.svelte';
  import Alert from '$components/Alert.svelte';
  import Wysiwyg from '$components/Form/Wysiwyg.svelte';

  export let form;
  export let data;
</script>

<div class="flex flex-col w-full h-full">
  <div class="w-full">
    <form action="?/update" method="POST">
      <fieldset>
        <legend class="text-3xl font-bold mb-2">Edit: "{data?.issue?.title}"</legend>
        <Input label="Title" name="title" required={true} value={data?.issue?.title} />
        <Wysiwyg label="Description" name="description" value={data?.issue?.description} />
        <button type="submit" class="btn btn-primary mt-6">Save</button>
      </fieldset>
    </form>
  </div>

  {#if form?.success}
    <Alert level="success">
      <p>Issue updated successfully!</p>
    </Alert>
  {/if}
</div>
