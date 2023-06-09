<script>
  import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
  } from 'flowbite-svelte'
  import Github from '$lib/components/icons/Github/Github.svelte'
  import Twitter from '$lib/components/icons/Twitter/Twitter.svelte'
  import YouTube from '$lib/components/icons/YouTube/YouTube.svelte'
</script>

<Footer footerType="socialmedia">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand href="/" src="/logo-dark.svg" alt="Logo" name="TutorInTech" />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
          Follow us
        </h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="https://github.com/tolstoyevsky">GitHub</FooterLink>
          <FooterLink liClass="mb-4" href="https://twitter.com/cusdeb">Twitter</FooterLink>
          <FooterLink
            liClass="mb-4"
            href="https://www.youtube.com/channel/UCiqtM2a5ONFteTLl6zkgrqQ"
          >
            YouTube
          </FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="/policy">Privacy Policy</FooterLink>
          <FooterLink liClass="mb-4" href="/about-us">About Us</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="CusDeb" />
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon href="https://twitter.com/cusdeb" class="text-gray-400 hover:text-gray-900">
        <Twitter />
      </FooterIcon>
      <FooterIcon href="https://github.com/tolstoyevsky" class="text-gray-400 hover:text-gray-900">
        <Github />
      </FooterIcon>
      <FooterIcon
        href="https://www.youtube.com/channel/UCiqtM2a5ONFteTLl6zkgrqQ"
        class="text-gray-400 hover:text-gray-900"
      >
        <YouTube />
      </FooterIcon>
    </div>
  </div>
</Footer>
