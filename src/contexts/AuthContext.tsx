import React, { createContext, useContext, useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

type User = string | null

type Authstate = {
  user: User
  setUser: (user: User | (() => User)) => void
}

const initialState: Authstate = {
  user: null,
  setUser: () => null,
}

const AuthContext = createContext<Authstate>(initialState)

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState(() => localStorage.getItem('user'))

  // This is needed for auto redirect after login
  // If someone tries to set user value from dev tools
  // then tries to logout, this useEffect wont run
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user)
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const auth: Authstate = {
    user,
    setUser,
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const auth = useContext(AuthContext)

  if (auth === undefined) {
    throw new Error('Must be used in AuthProvider')
  }

  return auth
}
