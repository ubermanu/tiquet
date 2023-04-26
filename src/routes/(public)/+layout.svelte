<script>
  import { page } from '$app/stores'
  import Alert from '$lib/components/Alert.svelte'
</script>

<div class="w-full h-full max-w-4xl mx-auto p-8">
  {#if $page.form?.message}
    <div class="my-4">
      <Alert level={$page.form?.success ? 'success' : 'error'}>
        {$page.form.message}
      </Alert>
    </div>
  {/if}
  <slot />
</div>
