<script>
  import { LocalStorage, Toggle } from 'carbon-components-svelte'

  let storage
  let toggled = false

  $: document.documentElement.setAttribute('theme', toggled ? 'g100' : 'white')
</script>

<LocalStorage bind:this={storage} key="dark-mode" bind:value={toggled} />

<Toggle size="sm" labelText="Dark mode" bind:toggled />
