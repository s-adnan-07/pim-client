import Grid from '@mui/material/Unstable_Grid2'

import product from '../assets/product'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Specifications from '../components/Specifications'
import ItemsIncluded from '../components/ItemsIncluded'
import Prices from '../components/Prices'
import Title from '../components/Title'
import GridStack from '../ui/GridStack'

type Props = {}

function Home({}: Props) {
  const {
    model,
    brand,
    searchTitle,
    s3Images,
    features,
    specification,
    price,
    whats_included,
  } = product

  return (
    <Grid container spacing={2} py={2}>
      <GridStack>
        <Title model={model} brand={brand} searchTitle={searchTitle} />
        <Carousel images={s3Images} />
      </GridStack>

      <GridStack md={8}>
        <Features features={features} />
        <Specifications specification={specification} />
      </GridStack>

      <GridStack md={4}>
        <Prices price={price} />
        <ItemsIncluded items={whats_included} />
      </GridStack>
    </Grid>
  )
}

export default Home
