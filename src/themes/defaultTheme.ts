import { createTheme } from '@mui/material'
import { blueGrey, teal } from '@mui/material/colors'

const defaultTheme = createTheme({
  components: {
    MuiPaper: { defaultProps: { elevation: 12, sx: { p: 2 } } },
    MuiStack: { defaultProps: { spacing: 3 } },
    MuiGrid2: { defaultProps: { xs: 12 } },
  },
})

export const darkTheme = createTheme({
  ...defaultTheme,
  palette: { mode: 'dark', primary: teal },
})

export const lightTheme = createTheme({
  ...defaultTheme,
  palette: { mode: 'light', primary: blueGrey },
})

export default defaultTheme
