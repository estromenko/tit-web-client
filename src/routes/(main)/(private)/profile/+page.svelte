<script lang="ts">
  import {A, Input} from 'flowbite-svelte'
  import {getContext} from 'svelte'
  import {fade} from 'svelte/transition'

  import Form from '$lib/components/Form/Form.svelte'
  import ArrowIcon from '$lib/components/icons/ArrowIcon/ArrowIcon.svelte'
  import PasswordResetForm from '$lib/components/PasswordResetForm/PasswordResetForm.svelte'
  import type {User} from '$lib/types'

  const user = getContext<User>('user')

  export let form: FormData
</script>

<div class="absolute w-full p-4" transition:fade>
  <div class="flex justify-between align-center p-4">
    <h2 class="text-3xl font-bold">Account Details</h2>
    <div>
      <A href="/sign-in">
        Logout
        <ArrowIcon />
      </A>
    </div>
  </div>
  <div class="flex justify-between gap-4 flex-col md:flex-row">
    <div class="w-full">
      <Form title="General Information">
        <div class="flex justify-between items-center">
          <div class="w-full">
            <span class="font-bold">Email</span>
            <span class="text-gray-400 italic">(cannot be edited)</span>
          </div>
          <div class="w-2/4">
            <Input class="w-full p-3 shadow" disabled placeholder={user.email} />
          </div>
        </div>
      </Form>
    </div>
    <div class="w-full">
      <PasswordResetForm actionData={form} />
    </div>
  </div>
</div>
