<script>
  import {
    CheckCircle,
    ExclamationCircle,
    Icon,
    InformationCircle,
    XCircle
  } from 'svelte-hero-icons';

  export let level = 'info';

  const levelIcons = {
    info: InformationCircle,
    success: CheckCircle,
    warning: ExclamationCircle,
    error: XCircle
  };
</script>

<div class="alert alert-{level} shadow-lg mt-6 w-full max-w-md mx-auto">
  <div>
    <Icon
      src={levelIcons[level] ?? InformationCircle}
      class="stroke-current flex-shrink-0 w-6 h-6"
    />
    <span>
      <slot />
    </span>
  </div>
</div>
