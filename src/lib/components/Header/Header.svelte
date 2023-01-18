<script>
  import {Navbar, NavBrand, NavHamburger, NavLi, NavUl} from 'flowbite-svelte'
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
    <NavLi href="/sign-in ">Sign in</NavLi>
    <NavLi href="/sign-up">Sign up</NavLi>
  </NavUl>
</Navbar>
