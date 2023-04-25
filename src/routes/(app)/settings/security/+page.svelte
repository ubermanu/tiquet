<script>
  import { CheckCircle, Icon } from 'svelte-hero-icons'
  import Input from '$components/Form/Input.svelte'
  import Modal from '$components/Modal.svelte'
  import Alert from '../../../../components/Alert.svelte'

  export let data
  export let form

  let updateEmailOpen = false
</script>

<div class="w-full">
  <h3 class="text-xl font-bold mb-5">Security</h3>

  <div class="max-w-xs mb-5">
    <fieldset class="fieldset">
      <legend class="legend">Email</legend>
      <div class="form-control w-full mt-6">
        <Modal label="Update Email" bind:opened={updateEmailOpen}>
          <span slot="trigger" type="button" class="btn variant-filled w-full">
            Update Email
          </span>
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
            <button type="submit" class="btn variant-filled mt-4">
              Submit
            </button>
            <button
              type="button"
              class="btn variant-ghost mt-4"
              on:click={() => (updateEmailOpen = false)}>Cancel</button
            >
          </form>
        </Modal>
      </div>
    </fieldset>
  </div>

  <form action="?/requestNewPassword" method="POST" class="max-w-xs">
    <fieldset class="fieldset">
      <legend class="legend">Password</legend>
      <button type="submit" class="btn variant-filled">
        Request New Password
      </button>
    </fieldset>
  </form>

  {#if form?.message}
    <div class="mt-4">
      <Alert level={form?.success ? 'success' : 'error'}>{form.message}</Alert>
    </div>
  {/if}
</div>
