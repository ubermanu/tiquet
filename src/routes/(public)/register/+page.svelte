<script>
  import Input from '$lib/components/Form/Input.svelte'
  import Checkbox from '$lib/components/Form/Checkbox.svelte'

  let showPassword = false
</script>

<div class="container mx-auto px-6 my-10">
  <form action="?/register" method="POST" class="max-w-xs mx-auto">
    <fieldset class="fieldset">
      <legend class="legend">Sign Up</legend>
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
        type={showPassword ? 'text' : 'password'}
        required={true}
        autocomplete="new-password"
      />
      <Input
        label="Confirm Password"
        name="passwordConfirm"
        type={showPassword ? 'text' : 'password'}
        required={true}
        autocomplete="new-password"
      />
      <Checkbox label="Show Password" bind:checked={showPassword} />
      <button type="submit" class="btn variant-filled">Sign Up</button>
      <p>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </fieldset>
  </form>
</div>
