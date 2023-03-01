export interface User {
  email: string
  isSuperUser: boolean
  isActive: boolean
  token: string

  error?: string
}

export interface IAuthFormData {
  email?: string
  password?: string
}

export interface IAuthActionData {
  missingEmail?: boolean
  passwordTooShort?: boolean
  passwordTooLong?: boolean
  somethingWrong?: boolean
  [key: string]: unknown
}

export interface ISignUpActionData extends IAuthActionData {
  passwordMismatch?: boolean
}

export interface ISignInActionData extends IAuthActionData {
  invalidData?: boolean
}

export interface IDashboardData {
  port: number
  password: string
}
