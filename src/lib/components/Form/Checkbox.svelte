<script>
  import { v4 as uuid } from '@lukeed/uuid'
  export let label
  export let id = uuid()
  export let name
  export let value = ''
  export let placeholder = ''
  export let required = false
  export let disabled = false
  export let checked = false
</script>

<label class="label" class:required>
  <span>{label}</span>
  <input
    class="checkbox"
    type="checkbox"
    {id}
    {name}
    {value}
    {placeholder}
    {required}
    {disabled}
    bind:checked
    {...$$restProps}
  />
</label>

<style>
  .label {
    @apply flex items-center gap-2 select-none cursor-pointer;
  }

  .label.required > span::after {
    @apply text-red-500;
    content: ' *';
  }
</style>
