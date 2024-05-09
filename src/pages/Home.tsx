import Grid from '@mui/material/Unstable_Grid2'
import Skeleton from '@mui/material/Skeleton'

// import product from '@/assets/hydratedProduct'
import Carousel from '@/components/Carousel'
import Features from '@/components/Features'
import Specifications from '@/components/Specifications'
import ItemsIncluded from '@/components/ItemsIncluded'
import Prices from '@/components/Prices'
import Title from '@/components/Title'
import GridStack from '@/ui/GridStack'
import Dimensions from '@/components/Dimensions'
import useProduct from '@/hooks/useProduct'
import Stocks from '@/components/Stocks'
import { Helmet } from 'react-helmet-async'

type Props = {}

// // TODO: Need to reduce container size, a value between 'xl' and 'lg'

function Home({}: Props) {
  const { prod, loading } = useProduct()

  if (loading) {
    return (
      <Grid container spacing={3} py={3}>
        <GridStack>
          <Skeleton variant="rectangular" height="20vh" />
          <Skeleton variant="rectangular" height="55vh" />
        </GridStack>
      </Grid>
    )
  }

  if (!prod) return <div>Product Not Found</div>

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
    category,
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
            category={category}
            soloCategory={soloCategory}
          />
          <Carousel images={s3Images} />
        </GridStack>

        <GridStack md={8}>
          <Features features={features} />
          <Specifications specification={specification} />
        </GridStack>

        <GridStack md={4}>
          <Prices price={price} />
          <ItemsIncluded items={whats_included} />
          <Stocks stocks={stocks} />
          <Dimensions package_dimension={package_dimension} />
        </GridStack>
      </Grid>
    </>
  )
}

export default Home
