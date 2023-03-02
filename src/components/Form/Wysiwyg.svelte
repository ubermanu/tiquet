<script>
  import Tiptap from '$components/Tiptap.svelte';
  import { v4 as uuid } from '@lukeed/uuid';
  export let label;
  export let id = uuid();
  export let name;
  export let value = '';
  export let placeholder = '';
  export let required = false;
  export let disabled = false;
</script>

<div class="form-control w-full" class:required>
  <label class="label">
    <span class="label-text">{label}</span>
  </label>
  <Tiptap bind:content={value} />
  <input type="hidden" {id} {name} bind:value {placeholder} {required} {disabled} />
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
