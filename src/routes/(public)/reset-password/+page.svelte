<script>
  import Input from '$lib/components/Form/Input.svelte'
</script>

<div class="my-4">
  <a href="/login">← Back to login</a>
</div>

<form action="?/resetPassword" method="POST" class="max-w-xs mx-auto">
  <fieldset class="fieldset">
    <legend class="legend">Reset your password</legend>
    <div class="text-sm">
      Enter your email address below and we'll send you a link to reset your
      password.
    </div>
    <Input
      label="Email"
      name="email"
      type="email"
      required={true}
      placeholder="email@example.com"
    />
    <button type="submit" class="btn variant-filled">
      Request Password Reset
    </button>
  </fieldset>
</form>
