<script>
  import { getContext } from 'svelte';
  import { Icon, Bell, Search, Plus } from 'svelte-hero-icons';
  import messages from '$lib/stores/message.js';
  import { getUserAvatarUrl } from '$lib/pocketbase.js';

  const user = getContext('authenticatedUser');
</script>

<header class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl" href="/">Tiquet</a>
  </div>
  <div class="navbar-end">
    {#if user}
      <a class="btn btn-ghost" href="/issues/new">
        <Icon src={Plus} class="h-5 w-5" />
        <span class="normal-case ml-2">New issue</span>
      </a>
      <button class="btn btn-ghost btn-circle">
        <Icon src={Search} class="h-5 w-5" />
      </button>
      <button class="btn btn-ghost btn-circle">
        <span class="indicator">
          <Icon src={Bell} class="h-5 w-5" />
          {#if $messages.length}
            <span class="badge badge-xs badge-primary indicator-item" />
          {/if}
        </span>
      </button>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <span class="w-10 rounded-full overflow-hidden">
            <img src={getUserAvatarUrl(user)} alt />
          </span>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li class="text-gray-500 pointer-events-none" tabindex="-1">
            <span>{user.email}</span>
          </li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
    {/if}
  </div>
</header>
