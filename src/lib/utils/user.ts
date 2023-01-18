import type {Cookies} from '@sveltejs/kit'

import {MAX_PASSWORD_LEN, MIN_PASSWORD_LEN} from '$lib/defaults'
import type {IAuthActionData, IAuthFormData} from '$lib/types'

export const setToken = (cookies: Cookies, token: string) => {
  cookies.set('accessToken', token, {httpOnly: true, secure: true, sameSite: 'strict'})
}

export const authValidation = (data: IAuthFormData, errors: IAuthActionData) => {
  if (!data.email) {
    errors.missingEmail = true
  }

  if (!data.password || data.password.length < MIN_PASSWORD_LEN) {
    errors.passwordTooShort = true
  }

  if (!data.password || data.password.length > MAX_PASSWORD_LEN) {
    errors.passwordTooLong = true
  }
}
