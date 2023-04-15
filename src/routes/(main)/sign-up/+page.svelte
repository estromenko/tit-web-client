<script lang="ts">
  import SignUpForm from '$lib/components/SignUpForm/SignUpForm.svelte'

  import type {ActionData} from './$types'

  export let form: ActionData
</script>

<svelte:head>
  <title>TiT — Sign Up</title>
</svelte:head>

<section class="h-[calc(100vh-100px)]">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img src="/logo.png" class="h-full m-auto" alt="Sign in" />
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <SignUpForm actionData={form} />
      </div>
    </div>
  </div>
</section>
