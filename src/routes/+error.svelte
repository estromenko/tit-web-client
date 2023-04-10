<script>
  import {A} from 'flowbite-svelte'
  import {fade} from 'svelte/transition'

  import {page} from '$app/stores'
  import Header from '$lib/components/Header/Header.svelte'
</script>

<div transition:fade class="absolute w-full">
  <Header />
  <div class="flex flex-col h-[calc(100vh-150px)] items-center justify-center">
    {#if $page.status !== 200}
      <h1
        class="text-3xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-7xl"
      >
        {$page.status}
      </h1>
      <p class="mb-6 text-xl font-normal text-gray-500 lg:text-2xl sm:px-16 lg:px-48">
        {$page.error.message}
      </p>
      <p class="w-60 text-center font-medium">
        Meanwhile, you may return to
        <A href="/" class="">main page</A>.
      </p>
    {/if}
  </div>
</div>
