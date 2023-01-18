import type {User} from '$lib/types'

export const registrationUser = async (
  url: string,
  email: string,
  password: string,
): Promise<User> => {
  try {
    const user = {email, password}
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return (await res.json()) as User
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw err
  }
}

export const loginUser = async (url: string, email: string, password: string): Promise<User> => {
  const user = {email, password}
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return (await res.json()) as User
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw err
  }
}
