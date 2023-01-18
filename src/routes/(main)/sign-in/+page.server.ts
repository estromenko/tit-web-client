import {fail, redirect} from '@sveltejs/kit'

import {env} from '$env/dynamic/public'
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
      const user = await loginUser(
        `${env.PUBLIC_TIT_BACKEND}/auth/login`,
        data.email as string,
        data.password as string,
      )
      setToken(cookies, user.token)
    } catch (err) {
      return fail(400, {somethingWrong: true})
    }

    throw redirect(303, '/')
  },
}
