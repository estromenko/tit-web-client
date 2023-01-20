<script lang="ts">
  import {Navbar, NavBrand, NavHamburger, NavLi, NavUl} from 'flowbite-svelte'

  export let isAuthenticated: boolean
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="logo.png" class="mr-3 h-6 sm:h-9" alt="Tutor In Tech logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Tutor In Tech
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/dashboard">Dashboard</NavLi>
    <NavLi href="/about-us">About us</NavLi>
    {#if isAuthenticated}
      <NavLi href="/profile">Profile</NavLi>
    {:else}
      <NavLi href="/sign-in ">Sign in</NavLi>
      <NavLi href="/sign-up">Sign up</NavLi>
    {/if}
  </NavUl>
</Navbar>
