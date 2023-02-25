<script>
  import { getContext } from 'svelte';
  import { Icon, Bell, Search, Cog } from 'svelte-hero-icons';
  import messages from '$lib/stores/message.js';

  const user = getContext('authenticatedUser');
</script>

<header class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl" href="/">Tiquet</a>
  </div>
  <div class="navbar-end">
    {#if user}
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
      <button class="btn btn-ghost btn-circle">
        <Icon src={Cog} class="h-5 w-5" />
      </button>
      <button class="btn btn-ghost btn-circle">
        <img class="rounded-full w-8" src={`https://i.pravatar.cc/150?u=${user.email}`} alt="" />
      </button>
    {/if}
  </div>
</header>
