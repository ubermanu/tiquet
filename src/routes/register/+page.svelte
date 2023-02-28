<script>
  import Input from '$components/Form/Input.svelte';
</script>

<div class="container mx-auto px-6 my-10">
  <form action="?/register" method="POST" class="max-w-xs mx-auto">
    <fieldset>
      <Input label="Email" name="email" type="email" />
      <Input label="Password" name="password" type="password" />
      <Input label="Confirm Password" name="passwordConfirm" type="password" />
      <div class="form-control w-full mt-6">
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>
    </fieldset>
  </form>
</div>
