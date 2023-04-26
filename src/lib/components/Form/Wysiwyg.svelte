<script>
  import Tiptap from '$lib/components/Tiptap.svelte'
  import { v4 as uuid } from '@lukeed/uuid'
  export let label
  export let id = uuid()
  export let name
  export let value = ''
  export let placeholder = ''
  export let required = false
  export let disabled = false
</script>

<label class="label" class:required id="{id}-label">
  <span>{label}</span>
</label>

<input type="hidden" {name} bind:value {placeholder} {required} {disabled} />
<Tiptap bind:content={value} {id} aria-labelledby="{id}-label" />

<style>
  .form-control.required .label-text::after {
    @apply text-red-500;
    content: ' *';
  }
</style>
