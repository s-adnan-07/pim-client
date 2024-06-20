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

import { Link as RouterLink } from 'react-router-dom'

type Props = {}

// Note: first implement search using only model
// * Make API call with model
// * If exists, API returns with product document
// * Maybe include search in the navbar

function SearchPage() {
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
                <TableCell sx={{ width: 1 / 5 }}>Brand</TableCell>
                <TableCell sx={{ width: 1 / 5 }}>Model</TableCell>
                <TableCell sx={{ width: 3 / 5 }}>SearchTitle</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {baseProducts.map(baseProduct => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{baseProduct.brand}</TableCell>
                  <TableCell>
                    {/* <Link>{product.model}</Link> */}
                    <RouterLink
                      to={`/products/${baseProduct.itemId}`}
                      target="_blank"
                    >
                      {baseProduct.model}
                    </RouterLink>
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
    </Stack>
  )
}

export default SearchPage
