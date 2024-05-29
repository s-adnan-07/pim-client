import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

type Props = {
  children?: React.ReactNode
}

function PrivateRoutes({}: Props) {
  const { user } = useAuth()
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
