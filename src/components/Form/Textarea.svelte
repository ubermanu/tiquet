<script>
  import { v4 as uuid } from '@lukeed/uuid'
  export let label
  export let id = uuid()
  export let name
  export let value = ''
  export let placeholder = ''
  export let required = false
  export let disabled = false
</script>

<label class="label" class:required>
  <span>{label}</span>
  <textarea
    class="textarea w-full"
    {id}
    {name}
    {value}
    {placeholder}
    {required}
    {disabled}
  />
</label>

<style>
  .label.required > span::after {
    @apply text-red-500;
    content: ' *';
  }
</style>
