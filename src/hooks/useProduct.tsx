import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Product from '@/types/product.model'
import hydratedProduct from '@/assets/hydratedProduct'
import { SERVER_PORT } from '@/constants/constants'

interface ProductResponse {
  status: number
  product: Product
}

function useProduct() {
  const params = useParams<{ itemId: string }>()
  const [prod, setProd] = useState<Product>(hydratedProduct)

  useEffect(() => {
    axios
      .get<ProductResponse>(
        `http://localhost:${SERVER_PORT}/products/by-id/${params.itemId}`,
      )
      .then(result => setProd(result.data.product))
      .catch(e => e)
  }, [])

  // Todo: Need to check why the below line fires before useeffect completes
  // if (!prod) throw new Error('Product doesnt exist')

  return { prod }
}

export default useProduct
