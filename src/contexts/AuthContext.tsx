import React, { createContext, useEffect, useState } from 'react'

type Props = { children: React.ReactNode; storageKey?: string }
type AuthState = {
  user: string | null
  token: string | null
  isLoggedIn: boolean
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
}

export const AuthContext = createContext<AuthState>(initialState)

function AuthProvider({ children }: Props) {
  // * There are two ways to store user and token in local storage
  /*
    user = {
      user,
      token
    }

    or

    user = user
    token = token
  */

  // The below state variables will be available throughout the app
  // That is the point of context, simple react states made global
  const [user, setUser] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // TODO: Add logic to sign in user here

  useEffect(() => {
    const user = localStorage.getItem('pim-user')
    const token = localStorage.getItem('token')

    if (user && token) {
      setUser(user)
      setToken(token)
    }
  }, [])

  const authState: AuthState = {
    user,
    token,
    isLoggedIn,
  }

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
