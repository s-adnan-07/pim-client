import axios from 'axios'
import { useParams } from 'react-router-dom'
import { QueryFunction, useQuery } from '@tanstack/react-query'

import Product from '@/types/product.model'
import { VITE_SERVER_URL } from '@/constants/constants'

interface ProductResponse {
  product: Product
}

function useProduct() {
  const params = useParams<{ itemId: string }>()

  // TODO: Handle errors
  const fetchProduct: QueryFunction<Product, string[], never> = async ({
    queryKey,
  }) => {
    const token = localStorage.getItem('token')
    const [_, itemId] = queryKey
    const { data } = await axios.get<ProductResponse>(
      `${VITE_SERVER_URL}/products/by-id/${itemId}`,
      // { withCredentials: true },
      { headers: { Authorization: `Bearer ${token}` } },
    )

    return data.product
  }

  const { data, isLoading } = useQuery({
    queryKey: ['products', params.itemId as string],
    queryFn: fetchProduct,
    retry: false,
  })

  return { prod: data, isLoading }
}

export default useProduct
