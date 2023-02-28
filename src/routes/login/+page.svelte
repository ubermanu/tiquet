<script>
  import Input from '$components/Form/Input.svelte';
</script>

<div class="container mx-auto px-6 my-10">
  <form action="?/login" method="POST" class="max-w-xs mx-auto">
    <fieldset>
      <Input label="Email" name="email" type="email" required={true} />
      <Input label="Password" name="password" type="password" required={true}>
        <a slot="bottom-left" class="text-secondary" href="/reset-password">Forgot Password?</a>
      </Input>
      <div class="form-control w-full mt-6">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </fieldset>
  </form>
</div>
