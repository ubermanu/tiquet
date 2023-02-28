<script>
  import { CheckCircle, Icon, Pencil } from 'svelte-hero-icons';
  import { getUserAvatarUrl } from '$lib/pocketbase.js';
  import Input from '$components/Form/Input.svelte';

  export let data;
  export let form;

  function showPreview(event) {
    const { target } = event;
    const { files } = target;

    if (files.length) {
      const src = URL.createObjectURL(files[0]);
      const preview = document.getElementById('avatar-preview');
      preview.src = src;
    }
  }
</script>

<div class="w-full">
  <h3 class="text-xl font-bold mb-5">Profile</h3>

  <form action="?/updateProfile" method="POST" enctype="multipart/form-data" class="max-w-xs">
    <fieldset>
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
          tabindex="0"
        >
          <button class="absolute bottom-0 right-0 btn btn-sm btn-secondary btn-circle">
            <Icon src={Pencil} class="w-4 h-4" />
          </button>
          <img class="rounded-full" src={getUserAvatarUrl(data?.user)} id="avatar-preview" alt />
        </label>
      </div>
      <Input name="name" label="Name" value={data?.user?.name} />
      <div class="form-control w-full mt-6">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </fieldset>
  </form>
  {#if form?.success}
    <div class="alert alert-success shadow-lg mt-6 w-full">
      <div>
        <Icon src={CheckCircle} class="stroke-current flex-shrink-0 w-6 h-6" />
        <span>Your profile has been updated.</span>
      </div>
    </div>
  {/if}
</div>
