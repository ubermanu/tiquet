<script>
  export let data;
</script>

{#if !data.user}
  <div class="container text-center py-5 mx-auto">
    <h1 class="text-xl mb-4">You need to be logged in to view this page</h1>
    <a href="/login" class="btn btn-primary">Login</a>
  </div>
{/if}
