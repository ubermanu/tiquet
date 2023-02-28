<script>
  export let label;
  export let opened = false;
</script>

<label for={label}>
  <slot name="trigger" />
</label>

<input type="checkbox" id={label} class="modal-toggle" bind:checked={opened} />
<div class="modal">
  <div class="modal-box">
    <div class="font-bold text-xl text-center">
      <slot name="title" />
    </div>
    <div class="my-2">
      <slot />
    </div>
    <div class="modal-action justify-center">
      <slot name="actions" />
    </div>
  </div>
</div>
