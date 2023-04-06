import {error} from '@sveltejs/kit'

import {getUser} from '$lib/api/http'

import type {LayoutServerLoad} from './$types'

export const load = (async ({cookies}) => {
  const user = await getUser(cookies.get('accessToken')!)

  if (!user.isSuperUser) {
    throw error(404)
  }
}) satisfies LayoutServerLoad
