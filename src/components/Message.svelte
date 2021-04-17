<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import { deleteMessage } from '../stores/messages'

  export let message

  let timeoutHandler = 0
  let animationHandler = 0
  let progress = writable(0)

  onMount(() => {
    timeoutHandler = setTimeout(() => {
      deleteMessage(message)
    }, 2000)

    animationHandler = setInterval(() => {
      $progress += 2.5
    }, 50)

    return () => {
      clearTimeout(timeoutHandler)
      clearInterval(animationHandler)
    }
  })
</script>

<style>
    .notification .progress {
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0.2;
    }
</style>

<div class="notification pb-5 {message.level}">
  <button class="delete" on:click={() => deleteMessage(message)}></button>
  <span>{message.body}</span>
  <progress class="progress is-small is-radiusless" value={$progress} max="100">{$progress}%</progress>
</div>
