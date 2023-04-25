<script>
  import Sidebar from '$components/Page/Sidebar.svelte'
  import Footer from '$components/Footer.svelte'
  import { AppShell } from '@skeletonlabs/skeleton'
</script>

<AppShell>
  <Sidebar slot="sidebarLeft" />
  <div class="w-full h-full max-w-4xl mx-auto p-8">
    <slot />
  </div>
  <Footer slot="pageFooter" />
</AppShell>
