<script lang="ts">
  import {fade} from 'svelte/transition'

  import SignUpForm from '$lib/components/SignUpForm/SignUpForm.svelte'

  import type {ActionData} from './$types'

  export let form: ActionData
</script>

<svelte:head>
  <title>TiT — Sign Up</title>
</svelte:head>

<section class="absolute w-full h-[calc(100vh-100px)]" transition:fade>
  <div class="px-6 h-full text-gray-800">
    <div class="flex justify-end items-center flex-wrap h-full g-6 lg:justify-center">
      <img class="w-1/3 m-auto hidden xl:block" alt="Sign up" src="/logo-dark.svg" />
      <div class="ml-auto mr-auto xl:ml-20 md:w-5/12 mb-12 md:mb-0">
        <SignUpForm actionData={form} />
      </div>
    </div>
  </div>
</section>
