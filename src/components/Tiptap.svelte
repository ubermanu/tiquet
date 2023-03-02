<script>
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import { Code, Icon } from 'svelte-hero-icons';

  let element;
  let editor;

  export let content = '';

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [StarterKit],
      content: '',
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      },
      onUpdate: () => {
        content = editor.getHTML();
      }
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  const controls = [
    {
      title: 'Bold',
      name: 'B',
      action: () => editor.chain().focus().toggleBold().run()
    },
    {
      title: 'Italic',
      name: 'I',
      action: () => editor.chain().focus().toggleItalic().run()
    },
    {
      title: 'Strike',
      name: 'S',
      action: () => editor.chain().focus().toggleStrike().run()
    }
  ];
</script>

{#if editor}
  <div class="w-full flex items-center space-x-2 mb-2">
    {#each controls as control}
      <button class="btn btn-ghost btn-sm" on:click={control.action} title={control.title}>
        {#if control.icon}
          <Icon src={control.icon} class="w-4 h-4" />
        {:else}
          {control.name}
        {/if}
      </button>
    {/each}
  </div>
{/if}

<div class="element" bind:this={element} />

<style>
  button.active {
    @apply text-accent;
  }

  .element :global(.ProseMirror) {
    @apply textarea textarea-bordered;
    @apply h-full min-h-16;
  }
</style>
