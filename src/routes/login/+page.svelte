<script>
  import Input from '$components/Form/Input.svelte'
</script>

<div class="container mx-auto px-6 my-10">
  <form action="?/login" method="POST" class="max-w-xs mx-auto">
    <fieldset>
      <Input label="Email" name="email" type="email" required={true} />
      <Input label="Password" name="password" type="password" required={true} />
      <a class="" href="/reset-password">Forgot Password?</a>
      <div class="form-control w-full mt-6">
        <button type="submit" class="btn variant-filled">Login</button>
      </div>
    </fieldset>
  </form>
</div>
