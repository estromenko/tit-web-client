<script lang="ts">
  import {Editor} from 'bytemd'
  import type {BytemdPlugin} from 'bytemd'
  import {Button, Input} from 'flowbite-svelte'
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import {enhance} from '$app/forms'

  import type {ActionData} from './$types'

  export let form: ActionData

  let content = '# Hello, world!'
  let bytemdPlugins: BytemdPlugin[] = []

  const fetchBytemdPlugins = async () => {
    const highlight = (await import('@bytemd/plugin-highlight')).default

    bytemdPlugins = [highlight()]
  }

  onMount(fetchBytemdPlugins)
</script>

<div class="absolute w-full p-4" transition:fade>
  <form action="?/create" method="POST" use:enhance>
    {#if form?.error}
      <div class="text-red-600 font-bold" transition:fade>
        {form.error}
      </div>
    {/if}
    <div class="flex gap-4 pb-4">
      <Input name="name" placeholder="Name" required />
      <Button type="submit">Save</Button>
    </div>
    <input name="content" type="hidden" value={content} />
    <Editor
      plugins={bytemdPlugins}
      value={content}
      on:change={(event) => (content = event.detail.value)}
    />
  </form>
</div>
