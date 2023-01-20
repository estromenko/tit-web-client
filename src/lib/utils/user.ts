import type {Cookies} from '@sveltejs/kit'

import {ACCESS_TOKEN_EXPIRE_HOURS, MAX_PASSWORD_LEN, MIN_PASSWORD_LEN} from '$lib/defaults'
import type {IAuthActionData, IAuthFormData} from '$lib/types'

export const setToken = (cookies: Cookies, token: string) => {
  const expires = new Date()
  const millisecondsToExpire = ACCESS_TOKEN_EXPIRE_HOURS * 60 * 60 * 1000
  expires.setTime(expires.getTime() + millisecondsToExpire)

  cookies.set('accessToken', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expires,
  })
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
