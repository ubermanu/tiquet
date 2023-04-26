<script>
  import { writable } from 'svelte/store'
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

  const links = [
    { href: '/', label: 'Ticket', icon: '🦟' },
    { href: '/issues', label: 'Issues', icon: DocumentDuplicate },
    { href: '/users', label: 'Users', icon: Users },
    { href: '/notifications', label: 'Notifications', icon: Bell },
    { href: '/settings', label: 'Settings', icon: Cog },
    { href: '/logout', label: 'Logout', icon: Logout },
  ]

  const selected = writable(
    links.findIndex((link) => link.href === $page.url.pathname)
  )
</script>

<AppRail {selected}>
  {#each links as link, i}
    <AppRailTile tag="a" href={link.href} label={link.label} value={i}>
      {#if typeof link.icon === 'string'}
        <span class="w-6 h-6">{link.icon}</span>
      {:else}
        <Icon src={link.icon} class="w-6 h-6" />
      {/if}
    </AppRailTile>
  {/each}
</AppRail>
