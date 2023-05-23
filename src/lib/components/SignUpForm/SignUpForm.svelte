<script lang="ts">
  import {A, Button, Input, Label, Spinner} from 'flowbite-svelte'
  import {fade} from 'svelte/transition'

  import {enhance} from '$app/forms'
  import type {ISignUpActionData} from '$lib/types'

  export let actionData: ISignUpActionData | undefined

  let loading = false

  const onSubmit = () => {
    loading = true
    actionData = undefined

    return async ({update}) => {
      await update()
      loading = false
    }
  }
</script>

<form action="?/registration" method="POST" use:enhance={onSubmit}>
  <div class="flex flex-row items-center justify-center">
    <p class="text-lg mb-0">Sign up</p>
  </div>

  <div
    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
  />

  {#if actionData?.error}
    <p class="text-red-700 dark:text-red-500 text-sm font-medium block mb-2">
      {actionData.error}
    </p>
  {/if}
  <div class="mb-6">
    {#if actionData?.missingEmail}<Label class="block mb-2" color="red" for="email"
        >Email cannot be empty</Label
      >{/if}
    <Label class="mb-2" for="email">Email address</Label>
    <Input name="email" placeholder="john.doe@company.com" required type="email" />
  </div>

  <div class="mb-6">
    <Label class="mb-2" for="password">Password</Label>
    {#if actionData?.passwordTooShort}
      <div transition:fade>
        <Label class="block mb-2" color="red" for="password">Password too short</Label>
      </div>
    {/if}
    {#if actionData?.passwordTooLong}
      <div transition:fade>
        <Label class="block mb-2" color="red" for="password">Password too long</Label>
      </div>
    {/if}
    {#if actionData?.passwordMismatch}
      <div transition:fade>
        <Label class="block mb-2" color="red" for="password">Passwords don't match</Label>
      </div>
    {/if}
    <Input id="password" name="password" placeholder="•••••••••" required type="password" />
  </div>

  <div class="mb-6">
    <Label class="mb-2" for="repeatPassword">Repeat password</Label>
    <Input
      id="repeatPassword"
      name="repeatPassword"
      placeholder="•••••••••"
      required
      type="password"
    />
  </div>

  <div class="relative h-10 text-center lg:text-left">
    {#if loading}
      <div transition:fade>
        <Spinner class="absolute ml-10" size={8} />
      </div>
    {:else}
      <div transition:fade>
        <Button
          btnClass="right-0 left-0 xl:right-auto xl:left-0 absolute px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          type="submit"
        >
          Register
        </Button>
      </div>
    {/if}
  </div>
  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
    Already have an account?
    <A
      class="hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
      color="text-red-600"
      href="/sign-in"
    >
      Login
    </A>
  </p>
</form>
