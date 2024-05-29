import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Unstable_Grid2'
import GridStack from '@/ui/GridStack'

function ProductLoading() {
  return (
    <Grid container spacing={3} py={3}>
      <GridStack>
        <Skeleton variant="rectangular" height="20vh" />
        <Skeleton variant="rectangular" height="55vh" />
      </GridStack>
    </Grid>
  )
}

export default ProductLoading
