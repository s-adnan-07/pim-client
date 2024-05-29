import { VITE_SERVER_URL } from '@/constants/constants'
import { useAuth } from '@/contexts/AuthContext'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}
type LoginDetails = {
  username: string
  password: string
}

type ApiResponse = {
  user: string
}

type User = {
  name: string
  username: string
  token: string
}

const initialState: LoginDetails = {
  username: '',
  password: '',
}

function useLogin() {
  // TODO: Disable login button while waiting for query to resolve
  const [loginDetails, setLoginDetails] = useState<LoginDetails>(initialState)
  const navigate = useNavigate()
  const { setUser } = useAuth()

  function handleUsername(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const username = e.target.value
    setLoginDetails(loginDetails => ({ ...loginDetails, username }))
  }

  function handlePassword(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const password = e.target.value
    setLoginDetails(loginDetails => ({ ...loginDetails, password }))
  }

  // TODO: Need to display failed login
  function handleErrors(e: unknown) {
    if (axios.isAxiosError(e)) {
      console.error(e.response?.data)
      return
    }

    console.error(e)
  }

  // TODO: Add delay before redirect and message
  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()

    try {
      const result = await axios.post<ApiResponse>(
        `${VITE_SERVER_URL}/auth/login`,
        loginDetails,
        { withCredentials: true },
      )

      const { user } = result.data

      setUser(() => user)
      navigate('/')
    } catch (e) {
      handleErrors(e)
    }
  }

  async function handleLogout(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()

    try {
      await axios.post(
        `${VITE_SERVER_URL}/auth/logout`,
        {},
        { withCredentials: true },
      )

      setUser(() => null)
    } catch (e) {
      handleErrors(e)
    }
  }

  return {
    loginDetails,
    handleUsername,
    handlePassword,
    handleSubmit,
    handleLogout,
  }
}

export default useLogin
