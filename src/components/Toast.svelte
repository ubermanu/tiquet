<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  let timeoutHandler = 0
  let animationHandler = 0

  function handleDelete(message) {
    // dispatch(deleteMessage(message))
  }

  let progress = writable(0)

  onMount(() => {
    timeoutHandler = setTimeout(() => {
      handleDelete(message)
    }, 2000)

    animationHandler = setInterval(() => {
      $progress += 2.5
    }, 50)

    return () => {
      clearTimeout(timeoutHandler)
      clearInterval(animationHandler)
    }
  })

  export let message
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
  <button class="delete" onClick={() => handleDelete(message)}></button>
  {message.body}
  <progress class="progress is-small is-radiusless" value={$progress} max="100">15%</progress>
</div>
