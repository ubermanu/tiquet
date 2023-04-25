<script>
  import { Icon, InformationCircle } from 'svelte-hero-icons'
  import Input from '$components/Form/Input.svelte'
  import Alert from '$components/Alert.svelte'

  export let form
</script>

<div class="mx-auto px-6 my-10">
  <form action="?/resetPassword" method="POST" class="max-w-xs mx-auto">
    <fieldset class="fieldset">
      <Input label="Email" name="email" type="email" required={true} />
      <button type="submit" class="btn variant-filled">
        Request Password Reset
      </button>
      {#if form?.success}
        <Alert level="success">
          A password reset link has been sent to your email address if it exists
          in our system.
        </Alert>
      {/if}
    </fieldset>
  </form>
</div>
