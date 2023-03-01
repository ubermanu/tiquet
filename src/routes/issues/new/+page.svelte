<script>
  import Input from '$components/Form/Input.svelte';
  import Textarea from '$components/Form/Textarea.svelte';
  import Alert from '$components/Alert.svelte';

  export let form;
</script>

<div class="flex flex-col w-full h-full">
  <div class="w-full">
    <form action="?/create" method="POST">
      <fieldset>
        <legend class="text-3xl font-bold mb-2">Create a new issue</legend>
        <Input label="Title" name="title" required={true} />
        <Textarea label="Description" name="description" />
        <button type="submit" class="btn btn-primary mt-6">Create Issue</button>
      </fieldset>
    </form>
  </div>

  {#if form?.success}
    <Alert level="success">
      <p>Issue created successfully!</p>
    </Alert>
  {/if}
</div>
