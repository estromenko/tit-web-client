import {redirect} from '@sveltejs/kit'

import type {LayoutServerLoad} from './$types'

export const load = (({url, cookies}) => {
  const accessToken = cookies.get('accessToken')

  if (!accessToken) {
    throw redirect(303, `/sign-in?next=${url.pathname}`)
  }
}) satisfies LayoutServerLoad
