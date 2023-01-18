<script lang="ts">
  import SignInForm from '$lib/components/SignInForm/SignInForm.svelte'

  import type {ActionData} from './$types'

  export let form: ActionData
</script>

<svelte:head>
  <title>TiT — Sign In</title>
</svelte:head>

<section class="h-90v">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img src="https://i.ytimg.com/vi/DN-1AAVsTJ0/hqdefault.jpg" class="w-full" alt="Sign in" />
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <SignInForm actionData={form} />
      </div>
    </div>
  </div>
</section>
