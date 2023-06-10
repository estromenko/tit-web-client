<script>
  import {fade} from 'svelte/transition'
  import Footer from '$lib/components/Footer/Footer.svelte'
  import Twitter from '$lib/components/icons/Twitter/Twitter.svelte'
  import Github from '$lib/components/icons/Github/Github.svelte'
  import YouTube from '$lib/components/icons/YouTube/YouTube.svelte'
</script>

<div class="absolute p-6 w-full" transition:fade>
  <section>
    <h2 class="text-2xl md:text-6xl font-bold text-blue-800">About us</h2>
    <hr class="mt-6 mb-6" />
    <div class="w-full">
      <p class="text-left md:h-24 text-2xl md:text-4xl">
        <a class="text-blue-600 hover:underline" href="https://cusdeb.com">CusDeb</a>
        is an IT company located in Rostov-on-Don, Russia.
      </p>
      <p class="text-xl">Follow our media:</p>
      <div class="flex justify-between w-24">
        <a href="https://twitter.com/cusdeb" class="text-gray-400 hover:text-gray-900">
          <Twitter />
        </a>
        <a href="https://github.com/tolstoyevsky" class="text-gray-400 hover:text-gray-900">
          <Github />
        </a>
        <a
          href="https://www.youtube.com/channel/UCiqtM2a5ONFteTLl6zkgrqQ"
          class="text-gray-400 hover:text-gray-900"
        >
          <YouTube />
        </a>
      </div>
    </div>
    <hr class="mt-6 mb-6" />
  </section>
  <Footer />
</div>
