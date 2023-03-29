<script lang="ts">
  import {A, Button, Input, Label, Spinner} from 'flowbite-svelte'
  import {fade} from 'svelte/transition'

  import {enhance} from '$app/forms'
  import {page} from '$app/stores'
  import type {ISignInActionData} from '$lib/types'

  export let actionData: ISignInActionData | undefined

  const nextPage = $page.url.searchParams.get('next') || '/'
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

<form method="POST" action="?/login" use:enhance={onSubmit}>
  <input type="hidden" name="nextPage" value={nextPage} />
  <div class="flex flex-row items-center justify-center">
    <p class="text-lg mb-0">Sign in</p>
  </div>

  <div
    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
  />

  {#if actionData?.error}
    <p transition:fade class="text-red-700 dark:text-red-500 text-sm font-medium block mb-2">
      {actionData.error}
    </p>
  {/if}
  <div class="mb-6">
    {#if actionData?.missingEmail}
      <Label for="email" color="red" class="block mb-2">Email cannot be empty</Label>
    {/if}
    <Label for="email" class="mb-2">Email address</Label>
    <Input type="email" name="email" id="email" placeholder="john.doe@company.com" required />
  </div>

  <div class="mb-6">
    {#if actionData?.passwordTooShort}
      <div transition:fade>
        <Label for="password" color="red" class="block mb-2">Password too short</Label>
      </div>
    {/if}
    {#if actionData?.passwordTooLong}
      <div transition:fade>
        <Label for="password" color="red" class="block mb-2">Password too long</Label>
      </div>
    {/if}
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" name="password" id="password" placeholder="•••••••••" required />
  </div>

  <div class="text-center lg:text-left">
    <div class="h-10 relative">
      {#if loading}
        <div transition:fade>
          <Spinner size={8} class="absolute ml-10" />
        </div>
      {:else}
        <div transition:fade>
          <Button
            type="submit"
            btnClass="absolute px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Login
          </Button>
        </div>
      {/if}
    </div>
    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
      Don't have an account?
      <A
        href="/sign-up"
        color="text-red-600"
        class="hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
      >
        Register
      </A>
    </p>
  </div>
</form>
