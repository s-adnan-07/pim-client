import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App.tsx'
import { darkTheme, lightTheme } from './themes/defaultTheme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
