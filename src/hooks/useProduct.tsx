import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios, { AxiosError, AxiosResponse } from 'axios'

import Product from '@/types/product.model'
import { VITE_SERVER_URL } from '@/constants/constants'

interface ProductResponse {
  status: number
  product: Product
}

function useProduct() {
  const params = useParams<{ itemId: string }>()
  const [prod, setProd] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  function handleError(e: unknown) {
    if (e instanceof AxiosError) {
      return setError(e.response?.data ?? 'Internal Server Error')
    }

    if (e instanceof Error) {
      return setError(e.message)
    }

    return setError('An Error Occured')
  }

  // TODO: use the error object in the Home Page
  useEffect(() => {
    axios
      .get<ProductResponse>(
        `${VITE_SERVER_URL}/products/by-id/${params.itemId}`,
      )
      .then(result => setProd(result.data.product))
      .catch(e => handleError(e))
      .finally(() => setLoading(false))
  }, [])

  // Todo: Need to check why the below line fires before useeffect completes
  // if (!prod) throw new Error('Product doesnt exist')

  return { prod, error, loading }
}

export default useProduct
