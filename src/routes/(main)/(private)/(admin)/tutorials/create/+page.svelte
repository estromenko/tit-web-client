<script lang="ts">
  import highlight from '@bytemd/plugin-highlight'
  import {Editor} from 'bytemd'
  import {Button, Input} from 'flowbite-svelte'
  import {fade} from 'svelte/transition'

  import {enhance} from '$app/forms'

  import type {ActionData} from './$types'

  export let form: ActionData

  let content = '# Hello, world!'
</script>

<div transition:fade class="absolute w-full p-4">
  <form use:enhance method="POST" action="?/create">
    {#if form?.error}
      <div transition:fade class="text-red-600 font-bold">
        {form.error}
      </div>
    {/if}
    <div class="flex gap-4 pb-4">
      <Input placeholder="Name" name="name" required />
      <Button type="submit">Save</Button>
    </div>
    <input type="hidden" name="content" value={content} />
    <Editor
      value={content}
      on:change={(event) => (content = event.detail.value)}
      plugins={[highlight()]}
    />
  </form>
</div>
