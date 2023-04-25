<script>
  import Input from '$components/Form/Input.svelte'
  import Alert from '$components/Alert.svelte'
  import Checkbox from '../../../components/Form/Checkbox.svelte'

  export let form

  let showPassword = false
</script>

<div class="container mx-auto px-6 my-10">
  <form action="?/register" method="POST" class="max-w-xs mx-auto">
    <fieldset class="fieldset">
      <legend class="legend">Sign Up</legend>
      <Input label="Email" name="email" type="email" required={true} />
      <Input
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        required={true}
      />
      <Input
        label="Confirm Password"
        name="passwordConfirm"
        type={showPassword ? 'text' : 'password'}
        required={true}
      />
      <Checkbox label="Show Password" bind:checked={showPassword} />
      <button type="submit" class="btn variant-filled">Sign Up</button>
      <p>
        Already have an account? <a href="/login">Log in</a>
      </p>
      {#if form?.message}
        <Alert level={form.success ? 'success' : 'error'}>
          <p>{form.message}</p>
        </Alert>
      {/if}
    </fieldset>
  </form>
</div>
