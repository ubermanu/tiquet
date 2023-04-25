<script>
  import { CheckCircle, Icon } from 'svelte-hero-icons';
  import Input from '$components/Form/Input.svelte';
  import Modal from '$components/Modal.svelte';

  export let data;
  export let form;

  let updateEmailOpen = false;
</script>

<div class="w-full">
  <h3 class="text-xl font-bold mb-5">Security</h3>

  <div class="max-w-xs mb-5">
    <fieldset>
      <legend>Email</legend>
      <div class="form-control w-full mt-6">
        <Modal label="Update Email" bind:opened={updateEmailOpen}>
          <span slot="trigger" type="button" class="btn btn-primary w-full">Update Email</span>
          <h4 slot="title">Enter a new email</h4>
          <form action="?/updateEmail" method="POST">
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder={data?.user?.email}
              value=""
              required={true}
            />
            <button type="submit" class="btn btn-primary mt-4">Submit</button>
            <button
              type="button"
              class="btn btn-ghost mt-4"
              on:click={() => (updateEmailOpen = false)}>Cancel</button
            >
          </form>
        </Modal>
      </div>
    </fieldset>
  </div>

  <form action="?/requestNewPassword" method="POST" class="max-w-xs">
    <fieldset>
      <legend>Password</legend>
      <div class="form-control w-full mt-6">
        <button type="submit" class="btn btn-primary">Request New Password</button>
      </div>
    </fieldset>
  </form>

  {#if form?.success}
    <div class="alert alert-success shadow-lg mt-6 w-full">
      <div>
        <Icon src={CheckCircle} class="stroke-current flex-shrink-0 w-6 h-6" />
        <span>{form?.message}</span>
      </div>
    </div>
  {/if}
</div>
