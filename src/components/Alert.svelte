<script>
  import {
    CheckCircle,
    ExclamationCircle,
    Icon,
    InformationCircle,
    XCircle,
  } from 'svelte-hero-icons'

  export let heading = ''

  /** @type {'info' | 'success' | 'warning' | 'error'} */
  export let level = 'info'

  const levelIcons = {
    info: InformationCircle,
    success: CheckCircle,
    warning: ExclamationCircle,
    error: XCircle,
  }

  const levelVariants = {
    info: 'variant-filled',
    success: 'variant-filled-success',
    warning: 'variant-filled-warning',
    error: 'variant-filled-error',
  }
</script>

<aside class="alert {levelVariants[level] ?? 'variant-filled'}">
  <div>
    <Icon
      src={levelIcons[level] ?? InformationCircle}
      class="stroke-current w-6 h-6"
    />
  </div>
  <div class="alert-message">
    {#if heading}
      <h3>{heading}</h3>
    {/if}
    <p><slot /></p>
  </div>
  {#if $$slots.actions}
    <div class="alert-actions">
      <slot name="actions" />
    </div>
  {/if}
</aside>
