import { useState } from 'react'
import { SnackbarCloseReason } from '@mui/material/Snackbar'

function useSnackBar(snackBarContent?: string) {
  const [open, setOpen] = useState(false)

  function handleClick() {
    if (!snackBarContent) return

    navigator.clipboard.writeText(snackBarContent)
    setOpen(true)
  }

  function handleClose(
    e: React.SyntheticEvent | Event,
    reason: SnackbarCloseReason,
  ) {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return { open, handleClick, handleClose }
}

export default useSnackBar
