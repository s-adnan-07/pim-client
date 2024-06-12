import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { SnackbarCloseReason } from '@mui/material/Snackbar'
import { VITE_SERVER_URL } from '@/constants/constants'
import { useAuth } from '@/contexts/AuthContext'

type LoginDetails = {
  username: string
  password: string
}

type ApiResponse = {
  user: string
  token: string
}

type ErrorMessage = { message: string }

type ErrorResponse = AxiosError<ErrorMessage>

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
  const [content, setContent] = useState('Default Error')
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()
  const { setUser } = useAuth()

  const { refetch, isLoading } = useQuery<ApiResponse, ErrorResponse>({
    queryKey: ['login'],
    queryFn: sendCredentials,
    retry: false,
    enabled: false,
  })

  async function sendCredentials() {
    const { data } = await axios.post<ApiResponse>(
      `${VITE_SERVER_URL}/auth/login`,
      loginDetails,
    )
    return data
  }

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

  // TODO: Add delay before redirect and message
  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()

    const { data, error } = await refetch()

    if (error) return handleErrors(error)
    if (!data) return

    const { user, token } = data
    localStorage.setItem('token', token)
    setUser(() => user)
    navigate('/')
  }

  // // Need to display failed login
  function handleErrors(error: ErrorResponse) {
    let { message, response } = error
    if (response) {
      message = response.data.message
    }

    console.dir(error)
    setContent(() => message)
    setOpen(() => true)
  }

  async function handleLogout(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()

    localStorage.removeItem('token')
    setUser(() => null)

    // try {
    //   await axios.post(
    //     `${VITE_SERVER_URL}/auth/logout`,
    //     {},
    //     { withCredentials: true },
    //   )
    // } catch (e) {
    //   handleErrors(e)
    // }
  }

  function handleClose(
    e: React.SyntheticEvent | Event,
    reason: SnackbarCloseReason,
  ) {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return {
    open,
    content,
    loginDetails,
    isLoading,
    setOpen,
    setContent,
    handleUsername,
    handlePassword,
    handleSubmit,
    handleLogout,
    handleClose,
  }
}

export default useLogin
