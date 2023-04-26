<script>
  import { page } from '$app/stores'

  const navigation = [
    {
      title: 'Profile',
      href: '/settings/profile',
    },
    {
      title: 'Notifications',
      href: '/settings/notifications',
    },
    {
      title: 'Security',
      href: '/settings/security',
    },
  ]
</script>

<h1 class="mb-8">Settings</h1>

<div class="flex flex-col h-full space-y-4 sm:flex-row">
  <div class="sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">
    <ul class="space-y-2 menu">
      {#each navigation as item}
        <li>
          <a
            href={item.href}
            class="block px-4 py-2 text-sm font-medium btn"
            class:variant-ghost={$page.url.pathname !== item.href}
            class:variant-filled={$page.url.pathname === item.href}
          >
            {item.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="flex-grow h-full px-4">
    <slot />
  </div>
</div>
