import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import { darkTheme, lightTheme } from './themes/defaultTheme.ts'

import { AuthProvider } from './contexts/AuthContext.tsx'
import QueryProvider from './contexts/QueryContext.tsx'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <QueryProvider>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </QueryProvider>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
