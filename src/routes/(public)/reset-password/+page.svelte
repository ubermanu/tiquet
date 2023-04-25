<script>
  import { Icon, InformationCircle } from 'svelte-hero-icons';
  import Input from '$components/Form/Input.svelte';

  export let form;
</script>

<div class="container mx-auto px-6 my-10">
  <form action="?/resetPassword" method="POST" class="max-w-xs mx-auto">
    <fieldset>
      <Input label="Email" name="email" type="email" required={true} />
      <div class="form-control w-full mt-6">
        <button type="submit" class="btn btn-primary">Request Password Reset</button>
      </div>
    </fieldset>
  </form>
  {#if form?.success}
    <div class="alert alert-info shadow-lg mt-6 w-full max-w-md mx-auto">
      <div>
        <Icon src={InformationCircle} class="stroke-current flex-shrink-0 w-6 h-6" />
        <span
          >A password reset link has been sent to your email address if it exists in our system.</span
        >
      </div>
    </div>
  {/if}
</div>
