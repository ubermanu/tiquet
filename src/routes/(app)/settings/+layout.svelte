<script>
  import { Cog, Icon } from 'svelte-hero-icons';
  import { page } from '$app/stores';

  const navigation = [
    {
      title: 'Profile',
      href: '/settings/profile'
    },
    {
      title: 'Notifications',
      href: '/settings/notifications'
    },
    {
      title: 'Security',
      href: '/settings/security'
    }
  ];
</script>

<div class="w-full h-full px-2 mx-auto">
  <h2 class="text-2xl font-medium">
    <Icon src={Cog} class="inline-block w-6 h-6 mr-2" />
    <span>Settings</span>
  </h2>
  <div class="divider" />
  <div class="flex flex-col h-full space-y-4 sm:flex-row">
    <div class="sm:w-1/4 mb-4 sm:mb-0 sm:mr-4">
      <ul class="space-y-2 menu">
        {#each navigation as item}
          <li>
            <a
              href={item.href}
              class="block px-4 py-2 text-sm font-medium rounded-md hover:bg-primary"
              class:active={$page.url.pathname === item.href}
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
</div>
