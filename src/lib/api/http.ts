import {env} from '$env/dynamic/public'
import type {IDashboardData, Tutorial, User} from '$lib/types'

interface IErrorResponse {
  error: string
}

type RequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

const sendRequest = async <T>(
  method: RequestMethod,
  url: string,
  data?: unknown,
  token?: string,
) => {
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
  })

  const responseData = (await res.json()) as T

  if (res.status >= 500) {
    throw new Error('Internal Server Error')
  }

  if (res.status >= 400) {
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

export const getDashboardPassword = async (token: string) => {
  const url = `${env.PUBLIC_TIT_BACKEND}/api/dashboard`
  return sendRequest<IDashboardData>('POST', url, undefined, token)
}

export const getUser = async (token: string) => {
  const url = `${env.PUBLIC_TIT_BACKEND}/api/whoami`
  return sendRequest<User>('GET', url, undefined, token)
}

export const listTutorials = async (token: string) => {
  const url = `${env.PUBLIC_TIT_BACKEND}/api/tutorials/`
  return sendRequest<Tutorial[]>('GET', url, undefined, token)
}

export const createTutorial = async (tutorial: Tutorial, token: string) => {
  const url = `${env.PUBLIC_TIT_BACKEND}/api/tutorials/`
  return sendRequest<Tutorial>('POST', url, tutorial, token)
}

export const getTutorial = async (id: number, token: string) => {
  const url = `${env.PUBLIC_TIT_BACKEND}/api/tutorials/${id}`
  return sendRequest<Tutorial>('GET', url, undefined, token)
}

export const updateTutorial = async (tutorial: Tutorial, token: string) => {
  const url = `${env.PUBLIC_TIT_BACKEND}/api/tutorials/${tutorial.id}`
  return sendRequest<Tutorial>('PUT', url, tutorial, token)
}

export const deleteTutorial = async (id: number, token: string) => {
  const url = `${env.PUBLIC_TIT_BACKEND}/api/tutorials/${id}`
  return sendRequest('DELETE', url, undefined, token)
}

export const resetPassword = async (password: string, newPassword: string, token: string) => {
  const url = `${env.PUBLIC_TIT_BACKEND}/auth/reset-password`
  return sendRequest('POST', url, {password, newPassword}, token)
}
