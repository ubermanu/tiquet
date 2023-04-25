<script>
  import Sidebar from '$components/Page/Sidebar.svelte'
  import Footer from '$components/Footer.svelte'
  import { AppShell } from '@skeletonlabs/skeleton'
</script>

<AppShell>
  <Sidebar slot="sidebarLeft" />
  <slot />
  <Footer slot="pageFooter" />
</AppShell>
