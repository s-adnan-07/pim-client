import { useState } from 'react'

import Typography from '@mui/material/Typography'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import { useTheme } from '@mui/material'

type Props = {
  /**
   * Content to be copied to clipboard on button click.
   */
  content?: string
  children: React.ReactNode
}

function PaperHeader({ content, children }: Props) {
  const [open, setOpen] = useState(false)
  const { palette } = useTheme()

  function handleClick() {
    if (!content) return

    navigator.clipboard.writeText(content)
    setOpen(true)
  }

  function handleClose(
    e: React.SyntheticEvent | Event,
    reason: SnackbarCloseReason,
  ) {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <Box
      bgcolor={palette.primary.dark}
      paddingY={1}
      paddingX={1.5}
      borderRadius={1}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      <Typography variant="h5">{children}</Typography>

      <IconButton onClick={handleClick}>
        <ContentPasteIcon fontSize="small" />
      </IconButton>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Copied to clipboard"
      />
    </Box>
  )
}

export default PaperHeader
