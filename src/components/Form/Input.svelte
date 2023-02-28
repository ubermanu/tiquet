<script>
  import { v4 as uuid } from '@lukeed/uuid';
  export let label;
  export let id = uuid();
  export let name;
  export let value = '';
  export let type = 'text';
  export let placeholder = '';
  export let required = false;
  export let disabled = false;
</script>

<div class="form-control w-full" class:required>
  <label class="label" for={id}>
    <span class="label-text">{label}</span>
  </label>
  <input
    type="text"
    name="name"
    class="input input-bordered w-full"
    {id}
    {value}
    {placeholder}
    {required}
    {disabled}
  />
  {#if 'bottom-left' in $$slots || 'bottom-right' in $$slots}
    <label class="label">
      <span class="label-text-alt"><slot name="bottom-left" /></span>
      <span class="label-text-alt"><slot name="bottom-right" /></span>
    </label>
  {/if}
</div>

<style>
  .form-control.required .label-text::after {
    @apply text-red-500;
    content: ' *';
  }
</style>
