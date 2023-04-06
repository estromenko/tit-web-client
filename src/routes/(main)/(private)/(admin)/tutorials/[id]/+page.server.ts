import {error} from '@sveltejs/kit'

import {getTutorial} from '$lib/api/http'
import type {Tutorial} from '$lib/types'

import type {PageServerLoad} from './$types'

export const load = (async ({params, cookies}) => {
  const tutorialId = parseInt(params.id)

  let tutorial: Tutorial | undefined

  try {
    tutorial = await getTutorial(tutorialId, cookies.get('accessToken')!)
  } catch {
    throw error(404)
  }

  return {
    tutorial: tutorial,
  }
}) satisfies PageServerLoad
