<script>
  import { Icon, Pencil } from 'svelte-hero-icons';
  import { getUserAvatarUrl } from '$lib/pocketbase.js';

  export let data;

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
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          class="input input-bordered w-full"
          value={data?.user?.name}
        />
      </div>
      <div class="form-control w-full mt-6">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </fieldset>
  </form>
</div>
