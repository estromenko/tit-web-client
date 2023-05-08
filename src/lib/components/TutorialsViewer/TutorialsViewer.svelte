<script lang="ts">
  import {Viewer} from 'bytemd'
  import {Listgroup, ListgroupItem, Spinner} from 'flowbite-svelte'
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import {listTutorials} from '$lib/api/http'
  import back from '$lib/assets/images/back.png'

  export let accessToken: string

  let loading = true
  let error = false
  let openedTutorial = ''
  let tutorials = []
  let bytemdPlugins = []

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
    <div transition:fade class="absolute place-self-center">
      <Spinner size={32} />
    </div>
  {:else if error}
    <h2 transition:fade class="text-red-600 font-bold">Error. Try to reload page</h2>
  {:else if openedTutorial}
    <div class="absolute top-0 w-full" transition:fade>
      <button class="absolute top-2 right-4 cursor-pointer" on:click={returnToTutorialsList}>
        <img src={back} alt="Back" class="h-10" />
      </button>
      <div class="p-8">
        <Viewer value={openedTutorial} plugins={bytemdPlugins} />
      </div>
    </div>
  {:else}
    <div transition:fade class="absolute top-0 p-2 w-full">
      <h2 class="font-bold text-3xl m-5">Available tutorials</h2>
      <Listgroup active>
        {#each tutorials as tutorial}
          <ListgroupItem on:click={() => (openedTutorial = tutorial.content)}>
            {tutorial.name}
          </ListgroupItem>
        {/each}
      </Listgroup>
    </div>
  {/if}
</div>
