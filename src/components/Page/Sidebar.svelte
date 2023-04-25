<script>
  import { AppRail, AppRailTile } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'
  import { Icon, Bell, Search, Plus, User, Logout } from 'svelte-hero-icons'

  const user = $page.data.user
</script>

<AppRail>
  <AppRailTile tag="a" href="/" label="Ticket">
    <span>🦟</span>
  </AppRailTile>
  <AppRailTile tag="a" href="/issues/new" label="New issue" value={1}>
    <Icon src={Plus} class="w-6 h-6" />
  </AppRailTile>
  <AppRailTile tag="a" href="/search" label="Search" value={2}>
    <Icon src={Search} class="w-6 h-6" />
  </AppRailTile>
  <AppRailTile tag="a" href="/notifications" label="Notifications" value={3}>
    <Icon src={Bell} class="w-6 h-6" />
  </AppRailTile>
  {#if user}
    <AppRailTile tag="a" href="/settings" label="Settings" value={4}>
      <Icon src={User} class="w-6 h-6" />
    </AppRailTile>
    <AppRailTile tag="a" href="/logout" label="Logout" value={5}>
      <Icon src={Logout} class="w-6 h-6" />
    </AppRailTile>
  {/if}
</AppRail>
