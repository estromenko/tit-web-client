<script lang="ts">
  import {Editor} from 'bytemd'
  import {Button, Modal} from 'flowbite-svelte'
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import {deleteTutorial, updateTutorial} from '$lib/api/http'

  import type {PageData} from './$types'

  export let data: PageData
  const tutorial = data?.tutorial

  let modalOpened = false
  let bytemdPlugins = []

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

<div transition:fade class="absolute w-full p-4">
  <div class="flex justify-between items-center pb-5">
    <h2 class="font-bold text-3xl">{tutorial.name}</h2>
    <div>
      <Button
        type="button"
        on:click={update}
        btnClass="px-5 py-2 bg-blue-600 text-white font-medium rounded shadow-md hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Save
      </Button>
      <Button
        type="button"
        on:click={() => (modalOpened = true)}
        btnClass="px-5 py-2 bg-red-600 text-white font-medium rounded shadow-md hover:bg-red-700 hover:shadow-lg active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Delete
      </Button>
    </div>
  </div>
  <Editor
    value={tutorial.content}
    on:change={(event) => (tutorial.content = event.detail.value)}
    plugins={bytemdPlugins}
  />
</div>
{#if modalOpened}
  <div transition:fade>
    <Modal bind:open={modalOpened} autoclose>
      <div class="flex flex-col">
        <p class="mt-6 mb-5 text-black">Are you sure you want to delete tutorial?</p>
        <Button on:click={drop} color="red">Delete</Button>
      </div>
    </Modal>
  </div>
{/if}
