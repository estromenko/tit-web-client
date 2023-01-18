<script lang="ts">
  import {A, Button, Input, Label} from 'flowbite-svelte'

  import {enhance} from '$app/forms'
  import type {ISignUpActionData} from '$lib/types'

  export let actionData: ISignUpActionData
</script>

<form method="POST" action="?/registration" use:enhance>
  <div class="flex flex-row items-center justify-center">
    <p class="text-lg mb-0">Sign up</p>
  </div>

  <div
    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
  />

  {#if actionData?.somethingWrong}<p
      class="text-red-700 dark:text-red-500 text-sm font-medium block mb-2"
    >
      Something wrong,try later
    </p>{/if}
  <div class="mb-6">
    {#if actionData?.missingEmail}<Label for="email" color="red" class="block mb-2"
        >Email cannot be empty</Label
      >{/if}
    <Label for="email" class="mb-2">Email address</Label>
    <Input type="email" name="email" placeholder="john.doe@company.com" required />
  </div>

  <div class="mb-6">
    <Label for="password" class="mb-2">Password</Label>
    {#if actionData?.passwordTooShort}<Label for="password" color="red" class="block mb-2"
        >Password too short</Label
      >{/if}
    {#if actionData?.passwordTooLong}<Label for="password" color="red" class="block mb-2"
        >Password too long</Label
      >{/if}
    {#if actionData?.passwordMismatch}<Label for="password" color="red" class="block mb-2"
        >Passwords don't match</Label
      >{/if}
    <Input type="password" id="password" name="password" placeholder="•••••••••" required />
  </div>

  <div class="mb-6">
    <Label for="repeatPassword" class="mb-2">Repeat password</Label>
    <Input
      type="password"
      id="repeatPassword"
      name="repeatPassword"
      placeholder="•••••••••"
      required
    />
  </div>

  <div class="text-center lg:text-left">
    <Button
      type="submit"
      btnClass="px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      Register
    </Button>
    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
      Already have an account?
      <A
        href="/sign-in"
        color="text-red-600"
        class="hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
      >
        Login
      </A>
    </p>
  </div>
</form>
