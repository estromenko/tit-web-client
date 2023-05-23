<script lang="ts">
  import {Viewer, type BytemdPlugin} from 'bytemd'
  import {Listgroup, ListgroupItem, Spinner} from 'flowbite-svelte'
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import {listTutorials} from '$lib/api/http'
  import back from '$lib/assets/images/back.png'
  import type {Tutorial} from '$lib/types'

  export let accessToken: string

  let loading = true
  let error = false
  let openedTutorial = ''
  let tutorials: Tutorial[] = []
  let bytemdPlugins: BytemdPlugin[] = []

  const fetchTutorials = async () => {
    try {
      tutorials = await listTutorials(accessToken)
    } catch (err) {
      error = true
      throw err
    } finally {
      loading = false
    }
  }

  const fetchPlugins = async () => {
    const highlight = (await import('@bytemd/plugin-highlight')).default

    bytemdPlugins = [highlight()]
  }

  const returnToTutorialsList = () => {
    openedTutorial = ''
  }

  onMount(() => {
    fetchTutorials()
    fetchPlugins()
  })
</script>

<div
  class="relative flex flex-center justify-center items-center rounded-md border-2 w-1/3 m-2 overflow-y-scroll"
>
  {#if loading}
    <div class="absolute place-self-center" transition:fade>
      <Spinner size="32" />
    </div>
  {:else if error}
    <h2 class="text-red-600 font-bold" transition:fade>Error. Try to reload page</h2>
  {:else if openedTutorial}
    <div class="absolute top-0 w-full" transition:fade>
      <button
        class="absolute top-2 right-4 cursor-pointer"
        type="button"
        on:click={returnToTutorialsList}
      >
        <img class="h-10" alt="Back" src={back} />
      </button>
      <div class="p-8">
        <Viewer plugins={bytemdPlugins} value={openedTutorial} />
      </div>
    </div>
  {:else}
    <div class="absolute top-0 p-2 w-full" transition:fade>
      <h2 class="font-bold text-3xl m-5">Available tutorials</h2>
      <Listgroup active>
        {#each tutorials as tutorial (tutorial.id)}
          <ListgroupItem on:click={() => (openedTutorial = tutorial.content)}>
            {tutorial.name}
          </ListgroupItem>
        {/each}
      </Listgroup>
    </div>
  {/if}
</div>
