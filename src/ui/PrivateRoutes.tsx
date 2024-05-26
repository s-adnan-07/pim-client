import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
}

function PrivateRoutes({}: Props) {
  let auth = false
  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
