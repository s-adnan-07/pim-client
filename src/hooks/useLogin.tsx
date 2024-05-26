import { VITE_SERVER_URL } from '@/constants/constants'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {}
type LoginDetails = {
  username: string
  password: string
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
  const [loginDetails, setLoginDetails] = useState<LoginDetails>(initialState)

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

  function handleErrors(e: unknown) {
    if (axios.isAxiosError(e)) {
      console.error(e.response?.data)
      return
    }

    console.error(e)
  }

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()

    try {
      const result = await axios.post(
        `${VITE_SERVER_URL}/auth/login`,
        loginDetails,
        { withCredentials: true },
      )
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
