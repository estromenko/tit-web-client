<script lang="ts">
  import {Editor} from 'bytemd'
  import type {BytemdPlugin} from 'bytemd'
  import {Button, Modal} from 'flowbite-svelte'
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import {deleteTutorial, updateTutorial} from '$lib/api/http'

  import type {PageData} from './$types'

  export let data: PageData
  const tutorial = data.tutorial

  let modalOpened = false
  let bytemdPlugins: BytemdPlugin[] = []

  const update = async () => {
    await updateTutorial(tutorial, data.accessToken!)
    window.location.href = '/tutorials'
  }

  const drop = async () => {
    await deleteTutorial(tutorial.id, data.accessToken!)
    window.location.href = '/tutorials'
  }

  const fetchBytemdPlugins = async () => {
    const highlight = (await import('@bytemd/plugin-highlight')).default

    bytemdPlugins = [highlight()]
  }

  onMount(fetchBytemdPlugins)
</script>

<div class="absolute w-full p-4" transition:fade>
  <div class="flex justify-between items-center pb-5">
    <h2 class="font-bold text-3xl">{tutorial.name}</h2>
    <div>
      <Button
        btnClass="px-5 py-2 bg-blue-600 text-white font-medium rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        type="button"
        on:click={update}
      >
        Save
      </Button>
      <Button
        btnClass="px-5 py-2 bg-red-600 text-white font-medium rounded shadow-md hover:bg-red-700 hover:shadow-lg active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        type="button"
        on:click={() => (modalOpened = true)}
      >
        Delete
      </Button>
    </div>
  </div>
  <Editor
    plugins={bytemdPlugins}
    value={tutorial.content}
    on:change={(event) => (tutorial.content = event.detail.value)}
  />
</div>
{#if modalOpened}
  <div transition:fade>
    <Modal autoclose bind:open={modalOpened}>
      <div class="flex flex-col">
        <p class="mt-6 mb-5 text-black">Are you sure you want to delete tutorial?</p>
        <Button color="red" on:click={drop}>Delete</Button>
      </div>
    </Modal>
  </div>
{/if}
