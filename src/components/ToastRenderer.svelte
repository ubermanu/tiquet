<script>
  import Toast from './Toast.svelte'

  const messages = []
</script>

<style>
    .toast {
        position: fixed;
        width: 20rem;
        z-index: 99;
        left: 2rem;
        bottom: 2rem;
    }
</style>

<div class="toast">
  {#each messages as message}
    <Toast {message} />
  {/each}
</div>
