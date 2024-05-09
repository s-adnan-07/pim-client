import axios from 'axios'
import { useState } from 'react'
import { BaseProduct } from '@/types/product.model'
import { SnackbarCloseReason } from '@mui/material/Snackbar'
import { VITE_SERVER_URL } from '@/constants/constants'

interface BaseProductResponse {
  status: number
  product: BaseProduct
}

interface ErrorResponse {
  statusCode: number
  message: string
}

function useSearch() {
  const [model, setModel] = useState('')
  const [baseProduct, setBaseProduct] = useState<BaseProduct | null>(null)

  const [content, setContent] = useState('Default Error')
  const [open, setOpen] = useState(false)

  async function getBaseProduct() {
    // Prevent API call if model entered isn't changed
    if (baseProduct?.model === model) return

    try {
      const { data } = await axios.post<BaseProductResponse>(
        `${VITE_SERVER_URL}/products/base`,
        { model },
      )

      setBaseProduct(data.product)
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse>(error)) {
        setContent(error.response?.data.message ?? 'Axios Error')
      } else {
        setContent('Error Occured')
      }

      setOpen(true)
    }
  }

  function handleClose(
    e: React.SyntheticEvent | Event,
    reason: SnackbarCloseReason,
  ) {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  function handleEnterKey(
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (e.key !== 'Enter') return

    // Note: When we press enter the page refreshes
    // > The below line stops the page from refreshing
    e.preventDefault()
    getBaseProduct()
  }

  return {
    open,
    content,
    model,
    baseProduct,
    setModel,
    getBaseProduct,
    setBaseProduct,
    handleClose,
    handleEnterKey,
  }
}

export default useSearch
