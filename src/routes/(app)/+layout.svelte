<script>
  import { AppShell } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'
  import Sidebar from '$lib/components/Page/Sidebar.svelte'
  import Footer from '$lib/components/Page/Footer.svelte'
  import Alert from '$lib/components/Alert.svelte'
</script>

<AppShell>
  <Sidebar slot="sidebarLeft" />
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
  <Footer slot="pageFooter" />
</AppShell>
