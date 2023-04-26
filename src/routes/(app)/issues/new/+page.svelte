<script>
  import Input from '$lib/components/Form/Input.svelte'
  import Wysiwyg from '$lib/components/Form/Wysiwyg.svelte'
</script>

<h1 class="mb-8">Create a new issue</h1>

<div class="mb-8">
  <a href="/issues">&larr; Back to issues</a>
</div>

<form action="?/create" method="POST">
  <fieldset class="fieldset">
    <Input label="Title" name="title" required={true} />
    <Wysiwyg label="Description" name="description" />
    <button type="submit" class="btn variant-filled">Create</button>
  </fieldset>
</form>
