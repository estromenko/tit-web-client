import type {LayoutServerLoad} from './$types'

export const load = (({cookies}) => {
  const token = cookies.get('accessToken')

  return {
    isAuthenticated: Boolean(token),
  }
}) satisfies LayoutServerLoad
