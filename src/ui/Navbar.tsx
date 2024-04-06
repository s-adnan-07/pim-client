import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'

type Props = {}

function Navbar({}: Props) {
  return (
    <Box
      bgcolor="teal"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={1}
    >
      <Typography variant="h5" fontWeight={700}>
        Navbar
      </Typography>
      <IconButton>
        <LightModeIcon />
      </IconButton>
    </Box>
  )
}

export default Navbar
