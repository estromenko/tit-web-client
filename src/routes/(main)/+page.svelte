<script>
  import {fade} from 'svelte/transition'

  import ArrowIcon from '$lib/components/icons/ArrowIcon/ArrowIcon.svelte'
  import Footer from '$lib/components/Footer/Footer.svelte'
</script>

<div class="absolute w-full" transition:fade>
  <section class="bg-center bg-gray-800" transition:fade>
    <div class="flex-col flex sm:flex-row items-center px-4 mx-auto max-w-screen-xl py-24">
      <div class="hidden sm:block w-1/2">
        <img src="/logo.svg" alt="CusDeb" />
      </div>
      <div class="text-center">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
        >
          TutorinTech
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl lg:px-16 lg:px-48">
          Next generation CybSec education platform
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <a
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            href="/dashboard"
          >
            Get started
            <ArrowIcon />
          </a>
          <a
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border-2 border-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            href="/about-us"
          >
            About Us
            <ArrowIcon />
          </a>
        </div>
        <div class="mt-4 text-white">
          Created by
          <a target="_blank" href="https://cusdeb.com" class="text-blue-600 hover:underline">
            CusDeb
          </a>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</div>
