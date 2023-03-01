import type {LayoutServerLoad} from './$types'

export const load = (({cookies}) => {
  const accessToken = cookies.get('accessToken')

  return {
    accessToken,
  }
}) satisfies LayoutServerLoad
