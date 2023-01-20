import {fail, redirect} from '@sveltejs/kit'

import {registrationUser} from '$lib/api/http'
import type {ISignUpActionData} from '$lib/types'
import {authValidation, setToken} from '$lib/utils/user'

import type {Actions} from './$types'

interface ISignUpFormData {
  email?: string
  password?: string
  repeatPassword?: string
}

export const actions: Actions = {
  registration: async ({cookies, request}) => {
    const data = Object.fromEntries(await request.formData()) as ISignUpFormData
    const errors: ISignUpActionData = {}

    authValidation(data, errors)

    if (data.password !== data.repeatPassword) {
      errors.passwordMismatch = true
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, errors)
    }

    try {
      const user = await registrationUser(data.email as string, data.password as string)
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
