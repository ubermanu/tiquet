<script>
  import { AppRail, AppRailTile } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'
  import {
    Icon,
    Bell,
    DocumentDuplicate,
    Logout,
    Cog,
    Users,
  } from 'svelte-hero-icons'

  const user = $page.data.user
</script>

<AppRail>
  <AppRailTile tag="a" href="/" label="Ticket">
    <span>🦟</span>
  </AppRailTile>
  <AppRailTile tag="a" href="/issues" label="Issues" value={2}>
    <Icon src={DocumentDuplicate} class="w-6 h-6" />
  </AppRailTile>
  <AppRailTile tag="a" href="/users" label="Users" value={3.5}>
    <Icon src={Users} class="w-6 h-6" />
  </AppRailTile>
  <AppRailTile tag="a" href="/notifications" label="Notifications" value={3}>
    <Icon src={Bell} class="w-6 h-6" />
  </AppRailTile>
  {#if user}
    <AppRailTile tag="a" href="/settings" label="Settings" value={4}>
      <Icon src={Cog} class="w-6 h-6" />
    </AppRailTile>
    <AppRailTile tag="a" href="/logout" label="Logout" value={5}>
      <Icon src={Logout} class="w-6 h-6" />
    </AppRailTile>
  {/if}
</AppRail>
