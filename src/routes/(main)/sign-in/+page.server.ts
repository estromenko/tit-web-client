import {fail, redirect} from '@sveltejs/kit'

import {loginUser} from '$lib/api/http'
import type {IAuthFormData, ISignInActionData} from '$lib/types'
import {authValidation, setToken} from '$lib/utils/user'

import type {Actions} from './$types'

export const actions: Actions = {
  login: async ({cookies, request}) => {
    const data = Object.fromEntries(await request.formData()) as IAuthFormData
    const errors: ISignInActionData = {}

    authValidation(data, errors)

    if (Object.keys(errors).length > 0) {
      return fail(400, errors)
    }

    try {
      const user = await loginUser(data.email, data.password)
      setToken(cookies, user.token)
    } catch (err) {
      let message = (err as Error).message

      if (err instanceof TypeError) {
        message = 'Internal Server Error'
      }

      return fail(400, {error: message})
    }

    throw redirect(303, '/')
  },
}
