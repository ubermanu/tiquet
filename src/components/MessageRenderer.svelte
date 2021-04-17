<script>
  import Message from './Message.svelte'
  import messages from '../stores/messages'
</script>

<style>
    .messages {
        position: fixed;
        width: 20rem;
        z-index: 99;
        left: 2rem;
        bottom: 2rem;
    }
</style>

<div class="messages">
  {#each $messages as message}
    <Message {message} />
  {/each}
</div>
