import { SnackbarCloseReason } from '@mui/material/Snackbar'
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
  token: string
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
  const [content, setContent] = useState('Default Error')
  const [open, setOpen] = useState(false)

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
      setContent(e.response?.data.message ?? 'Axios Error')
    } else if (e instanceof Error) {
      console.log(e)
      setContent(e.message)
    } else {
      console.log(e)
      setContent('Error Occured')
    }
    setOpen(true)
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
        { withCredentials: false },
      )

      result.headers
      const { user, token } = result.data

      localStorage.setItem('jwt', token)
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
      // Delete cookie here
      localStorage.removeItem('jwt')
      setUser(() => null)
    } catch (e) {
      handleErrors(e)
    }
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
