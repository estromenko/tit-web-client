import {listTutorials} from '$lib/api/http'

import type {PageServerLoad} from './$types'

export const load = (async ({cookies}) => {
  const tutorials = await listTutorials(cookies.get('accessToken')!)

  return {
    tutorials: tutorials,
  }
}) satisfies PageServerLoad
