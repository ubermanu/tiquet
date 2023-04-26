<script>
  import Input from '$lib/components/Form/Input.svelte'
  import Wysiwyg from '$lib/components/Form/Wysiwyg.svelte'
</script>

<form action="?/create" method="POST">
  <fieldset class="fieldset">
    <legend class="legend">Create a new issue</legend>
    <Input label="Title" name="title" required={true} />
    <Wysiwyg label="Description" name="description" />
    <button type="submit" class="btn variant-filled">Create</button>
  </fieldset>
</form>
