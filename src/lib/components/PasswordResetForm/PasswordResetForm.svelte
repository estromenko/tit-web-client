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
  <form use:enhance={onSubmit} action="?/resetPassword" method="POST">
    {#if actionData?.error}
      <p transition:fade class="text-red-700 dark:text-red-500 text-sm font-medium block mb-2">
        {actionData?.error}
      </p>
    {/if}
    <div class="flex justify-between items-center">
      <div class="w-full font-bold">Old Password</div>
      <div class="w-2/4">
        <FloatingLabelInput
          name="password"
          type="password"
          style="outlined"
          class="w-full shadow"
          label="Old Password"
          required
          bind:value={oldPassword}
          on:focus={() => (newPasswordVisible = true)}
        />
      </div>
    </div>
    {#if newPasswordVisible}
      <div in:fly={{y: -50, duration: 1000}} class="pt-4 flex justify-between items-center">
        <div class="w-full">
          <span class="font-bold"> New Password </span>
        </div>
        <div class="w-2/4">
          <FloatingLabelInput
            style="outlined"
            color={newPasswordInvalidMessage ? 'red' : undefined}
            type="password"
            class="w-full shadow"
            name="newPassword"
            label="New Password"
            required
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
      <div in:fly={{y: -50, duration: 1000}} class="pt-4 flex justify-between items-center">
        <div class="w-full">
          <span class="font-bold"> Repeat New Password </span>
        </div>
        <div class="w-2/4">
          <FloatingLabelInput
            style="outlined"
            color={repeatedNewPasswordInvalidMessage ? 'red' : undefined}
            type="password"
            class="w-full shadow"
            label="Repeat New Password"
            required
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
            <div transition:fade class="w-full flex justify-center">
              <Spinner class="absolute" />
            </div>
          {:else}
            <div transition:fade class="relative w-full">
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
