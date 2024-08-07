import { useState } from 'react'

// import baseProducts from '@/assets/baseProducts'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Snackbar from '@mui/material/Snackbar'

import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import useSearch from '../hooks/useSearch'

import Stack from '@mui/material/Stack'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop'

import { Link as RouterLink } from 'react-router-dom'

import dummy from '@/assets/dummy.jpg'

// Note: first implement search using only model
// * Make API call with model
// * If exists, API returns with product document
// * Maybe include search in the navbar

function SearchPage() {
  const [backDrop, setBackDrop] = useState(false)
  const [url, setUrl] = useState('')
  const {
    open,
    content,
    model,
    baseProducts,
    isLoading,
    setModel,
    handleClose,
    handleEnterKey,
    handleSubmit,
    handleClear,
  } = useSearch()

  return (
    <Stack mt={20} mb={5}>
      <Paper
        component="form"
        sx={{ display: 'flex', alignItems: 'center', px: 1 }}
      >
        <InputBase
          placeholder="Search"
          sx={{ flex: 1, ml: 1 }}
          // we are binding the field's value to the state variable
          // so that we can clear input by clearing state variable
          value={model}
          onChange={e => setModel(e.target.value)}
          onKeyDown={handleEnterKey}
        />

        {model && (
          <IconButton onClick={handleClear} size="small" disabled={isLoading}>
            <CloseIcon fontSize="small" />
          </IconButton>
        )}

        <IconButton onClick={handleSubmit} disabled={isLoading}>
          <SearchIcon />
        </IconButton>
      </Paper>

      {baseProducts && (
        <TableContainer component={Paper} sx={{ p: 0 }}>
          <Table>
            <TableHead sx={{ bgcolor: 'black' }}>
              <TableRow>
                <TableCell sx={{ width: 1 / 10 }} />
                <TableCell sx={{ width: 1 / 10 }} align="center">
                  Image
                </TableCell>
                <TableCell sx={{ width: 1 / 10 }}>Brand</TableCell>
                <TableCell sx={{ width: 1 / 10 }}>Model</TableCell>
                <TableCell sx={{ width: 5 / 10 }}>SearchTitle</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {baseProducts.map(baseProduct => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">
                    <Button
                      component={RouterLink}
                      to={`/products/${baseProduct.itemId}`}
                      target="_blank"
                      sx={{ textTransform: 'none' }}
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={baseProduct.thumbnail || dummy}
                      height={60}
                      onClick={() => {
                        if (!baseProduct.thumbnail) return
                        setUrl(baseProduct.thumbnail)
                        setBackDrop(true)
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                  </TableCell>
                  <TableCell>{baseProduct.brand}</TableCell>
                  <TableCell>
                    {baseProduct.model}
                    {/* <Link>{product.model}</Link> */}
                    {/* <RouterLink
                      to={`/products/${baseProduct.itemId}`}
                      target="_blank"
                    >
                      {baseProduct.model}
                    </RouterLink> */}
                  </TableCell>
                  <TableCell>{baseProduct.searchTitle}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={content}
      />

      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={backDrop}
        onClick={() => {
          setBackDrop(false)
          setUrl('')
        }}
      >
        <img src={url} height="90%" />
      </Backdrop>
    </Stack>
  )
}

export default SearchPage
