import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'

// import LightModeIcon from '@mui/icons-material/LightMode'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'

import useLogin from '@/hooks/useLogin'
import { useAuth } from '@/contexts/AuthContext'

function Navbar() {
  const { user } = useAuth()
  const { handleLogout } = useLogin()

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" fontWeight={700}>
          Navbar
        </Typography>
        {user && (
          <Tooltip title="Logout">
            <IconButton edge="end" onClick={handleLogout}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
