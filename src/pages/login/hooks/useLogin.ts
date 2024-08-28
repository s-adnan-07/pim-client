import axios, { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

import { LoginDetails, LoginSuccess } from '../types/login.types'
import { VITE_SERVER_URL } from '@/constants/constants'
import { useAuth } from '@/contexts/AuthContext'

const initialState: LoginDetails = {
  username: '',
  password: '',
}

function useLogin() {
  const [loginDetails, setLoginDetails] = useState(initialState)
  const { setUser } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const { refetch, isLoading } = useQuery<
    AxiosResponse<LoginSuccess>,
    AxiosError<{ message: string }>
  >({
    queryKey: ['useLogin'],
    queryFn: sendCredentials,
    enabled: false,
    retry: false,
  })

  function sendCredentials() {
    return axios.post(`${VITE_SERVER_URL}/auth/login`, loginDetails)
  }

  function getFormData(formData: FormData): LoginDetails {
    return {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    }
  }

  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newState = getFormData(formData)

    setLoginDetails(prevState => ({ ...prevState, ...newState }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleChange(e)

    const { data, error } = await refetch()

    if (error) {
      let { message, response } = error
      message = response?.data.message || message
      return enqueueSnackbar(message, { variant: 'error' })
    }

    if (!data) return

    const { token, user } = data.data

    localStorage.setItem('token', token)
    setUser(() => user)
    navigate('/')
  }

  return {
    isLoading,
    handleChange,
    handleSubmit,
  }
}

export default useLogin
