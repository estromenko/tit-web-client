<script>
  import {fade} from 'svelte/transition'

  import ArrowIcon from '$lib/components/icons/ArrowIcon/ArrowIcon.svelte'
</script>

<section
  transition:fade
  class="bg-center fixed h-screen w-screen bg-cover bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
>
  <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <h1
      class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
    >
      TutorinTech
    </h1>
    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
      Next generation CybSec education platform
    </p>
    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a
        href="/dashboard"
        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Get started
        <ArrowIcon />
      </a>
    </div>
  </div>
</section>
