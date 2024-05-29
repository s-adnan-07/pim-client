import { Helmet } from 'react-helmet-async'
import Grid from '@mui/material/Unstable_Grid2'

// import product from '@/assets/hydratedProduct'
import Title from '@/components/Title'
import Carousel from '@/components/Carousel'
import Features from '@/components/Features'
import Specifications from '@/components/Specifications'
import ItemsIncluded from '@/components/ItemsIncluded'
import Prices from '@/components/Prices'
import Stocks from '@/components/Stocks'
import Dimensions from '@/components/Dimensions'

import GridStack from '@/ui/GridStack'

import useProduct from '@/hooks/useProduct'

import ProductLoading from '@/states/ProductLoading'
import ProductNotFound from '@/states/ProductNotFound'

// import { loading, prod } from '@/assets/prod'

// // TODO: Need to reduce container size, a value between 'xl' and 'lg'

function Home() {
  const { prod, isLoading } = useProduct()

  if (isLoading) return <ProductLoading />
  if (!prod) return <ProductNotFound />

  const {
    model,
    brand,
    searchTitle,
    s3Images,
    features,
    specification,
    price,
    whats_included,
    package_dimension,
    soloCategory,
    stocks,
  } = prod

  return (
    <>
      <Helmet>
        <title>
          {brand} {model} - {searchTitle}
        </title>
      </Helmet>
      <Grid container spacing={3} py={3}>
        <GridStack>
          <Title
            model={model}
            brand={brand}
            searchTitle={searchTitle}
            soloCategory={soloCategory}
          />
          <Carousel images={s3Images} />
        </GridStack>

        <GridStack md={8}>
          {features && <Features features={features} />}
          {specification && <Specifications specification={specification} />}
        </GridStack>

        <GridStack md={4}>
          <Prices price={price} />
          {whats_included && <ItemsIncluded items={whats_included} />}
          {stocks && <Stocks stocks={stocks} />}
          <Dimensions package_dimension={package_dimension} />
        </GridStack>
      </Grid>
    </>
  )
}

export default Home
