import type {Actions} from '@sveltejs/kit'
import {fail, redirect} from '@sveltejs/kit'

import {createTutorial} from '$lib/api/http'
import type {Tutorial} from '$lib/types'

export const actions: Actions = {
  create: async ({cookies, request}) => {
    let tutorial: Tutorial | undefined
    try {
      const data = Object.fromEntries(await request.formData()) as unknown as Tutorial
      tutorial = await createTutorial(data, cookies.get('accessToken')!)
    } catch (err) {
      return fail(400, {error: (err as Error).message})
    }

    throw redirect(303, `/tutorials/${tutorial.id}`)
  },
}
