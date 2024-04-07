import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

type Props = {}

function Navbar({}: Props) {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" fontWeight={700}>
          Navbar
        </Typography>
        <IconButton edge="end">
          <LightModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
