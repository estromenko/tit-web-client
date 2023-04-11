import {getUser} from '$lib/api/http'
import type {User} from '$lib/types'

import type {LayoutServerLoad} from './$types'

export const load = (async ({cookies}) => {
  const accessToken = cookies.get('accessToken')

  let user: User | undefined
  if (accessToken) {
    user = await getUser(accessToken)
  }

  return {
    accessToken,
    user,
  }
}) satisfies LayoutServerLoad
