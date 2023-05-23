<script lang="ts">
  import {Button, FloatingLabelInput, Helper, Spinner} from 'flowbite-svelte'
  import {fade, fly} from 'svelte/transition'

  import {enhance} from '$app/forms'
  import Form from '$lib/components/Form/Form.svelte'
  import type {IPasswordResetActionData} from '$lib/types'

  let loading = false
  let newPasswordVisible = false
  let oldPassword = ''
  let newPassword = ''
  let repeatedNewPassword = ''

  export let actionData: IPasswordResetActionData | undefined

  $: newPasswordInvalidMessage =
    newPassword && oldPassword === newPassword ? 'New password must differ from the old one' : ''

  $: repeatedNewPasswordInvalidMessage =
    newPassword === repeatedNewPassword ? '' : "Passwords don't match"

  const onSubmit = async ({cancel}) => {
    loading = true
    actionData = undefined

    if (newPasswordInvalidMessage || repeatedNewPasswordInvalidMessage) {
      loading = false
      cancel()
      return
    }

    return async ({update}) => {
      await update()
      loading = false
    }
  }
</script>

<Form title="Password Reset">
  <form action="?/resetPassword" method="POST" use:enhance={onSubmit}>
    {#if actionData?.error}
      <p class="text-red-700 dark:text-red-500 text-sm font-medium block mb-2" transition:fade>
        {actionData?.error}
      </p>
    {/if}
    <div class="flex justify-between items-center">
      <div class="w-full font-bold">Old Password</div>
      <div class="w-2/4">
        <FloatingLabelInput
          name="password"
          style="outlined"
          class="w-full shadow"
          label="Old Password"
          required
          type="password"
          bind:value={oldPassword}
          on:focus={() => (newPasswordVisible = true)}
        />
      </div>
    </div>
    {#if newPasswordVisible}
      <div class="pt-4 flex justify-between items-center" in:fly={{y: -50, duration: 1000}}>
        <div class="w-full">
          <span class="font-bold"> New Password </span>
        </div>
        <div class="w-2/4">
          <FloatingLabelInput
            name="newPassword"
            style="outlined"
            class="w-full shadow"
            color={newPasswordInvalidMessage ? 'red' : undefined}
            label="New Password"
            required
            type="password"
            bind:value={newPassword}
          />
          {#if newPasswordInvalidMessage}
            <div transition:fade>
              <Helper color="red">
                {newPasswordInvalidMessage}
              </Helper>
            </div>
          {/if}
        </div>
      </div>
      <div class="pt-4 flex justify-between items-center" in:fly={{y: -50, duration: 1000}}>
        <div class="w-full">
          <span class="font-bold"> Repeat New Password </span>
        </div>
        <div class="w-2/4">
          <FloatingLabelInput
            style="outlined"
            class="w-full shadow"
            color={repeatedNewPasswordInvalidMessage ? 'red' : undefined}
            label="Repeat New Password"
            required
            type="password"
            bind:value={repeatedNewPassword}
          />
          {#if repeatedNewPasswordInvalidMessage}
            <div transition:fade>
              <Helper color="red">
                {repeatedNewPasswordInvalidMessage}
              </Helper>
            </div>
          {/if}
        </div>
      </div>
      <div class="w-full flex gap-5 mt-4" in:fly={{y: 50, duration: 1000}}>
        <div class="relative w-full">
          {#if loading}
            <div class="w-full flex justify-center" transition:fade>
              <Spinner class="absolute" />
            </div>
          {:else}
            <div class="relative w-full" transition:fade>
              <Button class="absolute w-full" type="submit">Save</Button>
            </div>
          {/if}
        </div>
        <Button class="w-16" color="red" on:click={() => (newPasswordVisible = false)}>
          Close
        </Button>
      </div>
    {/if}
  </form>
</Form>
