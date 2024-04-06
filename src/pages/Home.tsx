import Grid from '@mui/material/Unstable_Grid2'
import Stack from '@mui/material/Stack'
import product from '../assets/product'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Specifications from '../components/Specifications'
import ItemsIncluded from '../components/ItemsIncluded'
import Price from '../components/Price'
import Title from '../components/Title'

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
  } = product

  return (
    <Grid container spacing={2} py={2}>
      <Grid xs={12}>
        <Title model={model} brand={brand} searchTitle={searchTitle} />
      </Grid>

      <Grid xs={12}>
        <Carousel images={s3Images} />
      </Grid>

      <Grid xs={8}>
        <Stack spacing={2}>
          <Features features={features} />
          <Specifications specification={specification} />
        </Stack>
      </Grid>

      <Grid xs={4} spacing={2}>
        <Stack spacing={2}>
          <Price price={price} />
          <ItemsIncluded items={product.whats_included} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Home
