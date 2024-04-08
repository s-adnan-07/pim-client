import { createTheme } from '@mui/material'

const defaultTheme = createTheme({
  components: {
    MuiPaper: { defaultProps: { elevation: 12, sx: { p: 2 } } },
    MuiStack: { defaultProps: { spacing: 3 } },
    MuiGrid2: { defaultProps: { xs: 12 } },
  },
})

export const darkTheme = createTheme({
  ...defaultTheme,
  palette: { mode: 'dark' },
})

export const lightTheme = createTheme({
  ...defaultTheme,
  palette: { mode: 'light' },
})

export default defaultTheme
