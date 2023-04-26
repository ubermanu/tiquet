<script>
  import Input from '$lib/components/Form/Input.svelte'
</script>

<div class="mx-auto px-6 my-10">
  <form action="?/login" method="POST" class="max-w-xs mx-auto">
    <fieldset class="fieldset">
      <legend class="legend">Login</legend>
      <Input
        label="Email"
        name="email"
        type="email"
        required={true}
        placeholder="email@example.com"
        autocomplete="email"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        required={true}
        autocomplete="current-password"
      />
      <a href="/reset-password" class="text-sm">Forgot Password?</a>
      <button type="submit" class="btn variant-filled">Login</button>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </fieldset>
  </form>
</div>
