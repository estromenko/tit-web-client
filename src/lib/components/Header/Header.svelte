<script lang="ts">
  import {Navbar, NavBrand, NavHamburger, NavLi, NavUl} from 'flowbite-svelte'

  import type {User} from '$lib/types'

  import {page} from '$app/stores'
  import logoDark from '$lib/assets/images/logo-dark.svg'

  export let user: User | undefined
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img class="mr-3 w-16 h-6 sm:h-9" alt="Tutor In Tech logo" src={logoDark} />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      TutorInTech
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    {#if $page.url.pathname !== '/'}
      <NavLi href="/">Home</NavLi>
      <NavLi href="/dashboard">Dashboard</NavLi>
    {/if}
    <NavLi href="/about-us">About us</NavLi>
    {#if user}
      <NavLi href="/profile">Profile</NavLi>
      {#if user.isSuperUser}
        <NavLi href="/tutorials">Tutorials</NavLi>
      {/if}
    {:else}
      <NavLi href="/sign-in ">Sign in</NavLi>
      <NavLi href="/sign-up">Sign up</NavLi>
    {/if}
  </NavUl>
</Navbar>
