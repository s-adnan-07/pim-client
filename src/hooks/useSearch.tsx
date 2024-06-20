import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { BaseProduct } from '@/types/product.model'
import { SnackbarCloseReason } from '@mui/material/Snackbar'
import { VITE_SERVER_URL } from '@/constants/constants'
import { useQuery } from '@tanstack/react-query'

interface BaseProductResponse {
  status: number
  product: BaseProduct
}

type ErrorMessage = { message: string }

type ErrorResponse = AxiosError<ErrorMessage>

function useSearch() {
  const [model, setModel] = useState('')
  const [baseProduct, setBaseProduct] = useState<BaseProduct | null>(null)
  const [baseProducts, setBaseProducts] = useState<BaseProduct[] | null>(null)

  const [content, setContent] = useState('Default Error')
  const [open, setOpen] = useState(false)

  const { refetch, isLoading } = useQuery<BaseProduct[], ErrorResponse>({
    queryKey: ['search'],
    queryFn: sendModel,
    retry: false,
    enabled: false,
  })

  function handleErrors(error: ErrorResponse) {
    let { message, response } = error
    if (response) {
      message = response.data.message
    }

    console.dir(error)
    setContent(() => message)
    setOpen(() => true)
  }

  async function handleSubmit() {
    const { data, error } = await refetch()
    if (error) return handleErrors(error)
    if (!data) return

    setBaseProducts(() => data)
  }

  async function sendModel() {
    const token = localStorage.getItem('token')

    const { data } = await axios.post<BaseProduct[]>(
      `${VITE_SERVER_URL}/products/base`,
      { model },
      { headers: { Authorization: `Bearer ${token}` } },
    )

    return data
  }

  async function getBaseProduct() {
    // Prevent API call if model entered isn't changed
    if (baseProduct?.model === model) return

    try {
      const token = localStorage.getItem('token')
      const { data } = await axios.post<BaseProductResponse>(
        `${VITE_SERVER_URL}/products/base`,
        { model },
        { headers: { Authorization: `Bearer ${token}` } },
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
    handleSubmit()
  }

  function handleClear() {
    setModel('')
    setBaseProduct(null)
    setBaseProducts(null)
  }

  return {
    open,
    content,
    model,
    baseProduct,
    isLoading,
    baseProducts,
    setModel,
    getBaseProduct,
    setBaseProduct,
    handleClose,
    handleEnterKey,
    setBaseProducts,
    handleSubmit,
    handleClear,
  }
}

export default useSearch
