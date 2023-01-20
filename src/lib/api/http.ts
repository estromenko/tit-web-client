import {env} from '$env/dynamic/public'
import type {User} from '$lib/types'

interface IErrorResponse {
  error: string
}

type RequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

const sendRequest = async <T>(method: RequestMethod, url: string, data?: unknown) => {
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const responseData = (await res.json()) as T

  if (res.status >= 500) {
    throw new Error('Internal Server Error')
  }

  if (res.status == 400) {
    throw new Error((responseData as IErrorResponse).error)
  }

  return responseData
}

export const registrationUser = async (email: string, password: string): Promise<User> => {
  const url = `${env.PUBLIC_TIT_BACKEND}/auth/registration`
  return sendRequest<User>('POST', url, {email, password})
}

export const loginUser = async (email: string, password: string): Promise<User> => {
  const url = `${env.PUBLIC_TIT_BACKEND}/auth/login`
  return sendRequest<User>('POST', url, {email, password})
}
