<script>
  import { Icon, Pencil } from 'svelte-hero-icons'
  import { getUserAvatarUrl } from '$lib/pocketbase.js'
  import Input from '$components/Form/Input.svelte'
  import Alert from '$components/Alert.svelte'

  export let data
  export let form

  function showPreview(event) {
    const { target } = event
    const { files } = target

    if (files.length) {
      const src = URL.createObjectURL(files[0])
      const preview = document.getElementById('avatar-preview')
      preview.src = src
    }
  }
</script>

<h2 class="text-xl font-bold mb-5">Profile</h2>

<form
  action="?/updateProfile"
  method="POST"
  enctype="multipart/form-data"
  class="max-w-xs"
>
  <fieldset class="fieldset">
    <div class="form-control w-full">
      <input
        type="file"
        id="avatar"
        name="avatar"
        hidden
        accept="image/*"
        value=""
        on:change={showPreview}
      />
      <label
        class="relative avatar w-32 rounded-full hover:cursor-pointer"
        for="avatar"
      >
        <span
          class="absolute bottom-0 right-0 btn btn-sm variant-filled-secondary rounded-full"
          tabindex="0"
          role="button"
        >
          <Icon src={Pencil} class="w-4 h-4" />
        </span>
        <img
          class="rounded-full"
          src={getUserAvatarUrl(data?.user)}
          id="avatar-preview"
          alt
        />
      </label>
    </div>
    <Input name="name" label="Name" value={data?.user?.name} required={true} />
    <button type="submit" class="btn variant-filled">Save</button>
    {#if form?.success}
      <Alert level="success">Your profile has been updated.</Alert>
    {/if}
  </fieldset>
</form>
