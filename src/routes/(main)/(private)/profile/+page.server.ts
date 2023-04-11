import type {Actions} from '@sveltejs/kit'
import {fail, redirect} from '@sveltejs/kit'

import {resetPassword} from '$lib/api/http'
import type {IResetPasswordForm} from '$lib/types'

export const actions: Actions = {
  resetPassword: async ({request, cookies}) => {
    try {
      const accessToken = cookies.get('accessToken')!
      const data = Object.fromEntries(await request.formData()) as unknown as IResetPasswordForm

      await resetPassword(data.password, data.newPassword, accessToken)
    } catch (err) {
      return fail(400, {error: (err as Error).message})
    }

    throw redirect(303, '/sign-in')
  },
}
