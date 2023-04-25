<script>
  import Input from '$components/Form/Input.svelte'
  import Alert from '$components/Alert.svelte'

  export let form
</script>

<div class="mx-auto px-6 my-10">
  <form action="?/login" method="POST" class="max-w-xs mx-auto">
    <fieldset class="fieldset">
      <legend class="legend">Login</legend>
      <Input label="Email" name="email" type="email" required={true} />
      <Input label="Password" name="password" type="password" required={true} />
      <a href="/reset-password" class="text-xs">Forgot Password?</a>
      <button type="submit" class="btn variant-filled">Login</button>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
      {#if form?.message}
        <Alert level="error">
          {form.message}
        </Alert>
      {/if}
    </fieldset>
  </form>
</div>
