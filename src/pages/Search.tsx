import { useState } from 'react'

import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'

import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

type Props = {}

// Note: first implement search using only model
// * Make API call with model
// * If exists, API returns with product document
// * Maybe include search in the navbar

function Search({}: Props) {
  const [model, setModel] = useState('')
  const [open, setOpen] = useState(false)

  function handleClick() {
    if (!model) return

    setOpen(true)
  }

  function handleClose(
    e: React.SyntheticEvent | Event,
    reason: SnackbarCloseReason,
  ) {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  function handleClear() {
    if (open) setOpen(false)
    setTimeout(() => setModel(''), 50)
  }

  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', px: 1, mt: 20 }}
    >
      <InputBase
        placeholder="Search"
        sx={{ flex: 1, ml: 1 }}
        // we are binding the field's value to the state variable
        // so that we can clear input by clearing state variable
        value={model}
        onChange={e => setModel(e.target.value)}
      />

      {model && (
        <IconButton onClick={handleClear} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      )}

      <IconButton onClick={handleClick}>
        <SearchIcon />
      </IconButton>

      {/* Note: Snackbar is for testing */}

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={model}
      />
    </Paper>
  )
}

export default Search
