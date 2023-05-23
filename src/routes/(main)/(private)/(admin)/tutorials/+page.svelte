<script lang="ts">
  import {Button, Listgroup, ListgroupItem} from 'flowbite-svelte'
  import {fade} from 'svelte/transition'

  import type {PageServerLoad} from './$types'

  export let data: PageServerLoad
</script>

<div class="absolute w-full p-4" transition:fade>
  <h1 class="font-bold text-5xl m-5">Tutorials</h1>
  <Button class="ml-5" href="/tutorials/create">Create</Button>
  {#if data.tutorials.length > 0}
    <div class="p-5">
      <Listgroup active>
        {#each data.tutorials as tutorial (tutorial.id)}
          <ListgroupItem href={`/tutorials/${tutorial.id}`}>
            {tutorial.name}
          </ListgroupItem>
        {/each}
      </Listgroup>
    </div>
  {/if}
</div>
