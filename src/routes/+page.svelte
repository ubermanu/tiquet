<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

{#if !data.user}
  <div class="container text-center py-5 mx-auto">
    <p class="text-xl mb-4" role="alert">
      You need to be logged in to view this page
    </p>
    <a href="/login" class="btn variant-filled">Login</a>
  </div>
{/if}
