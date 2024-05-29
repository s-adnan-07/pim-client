import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const queryClient = new QueryClient()

function QueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
