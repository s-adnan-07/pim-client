import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'

function ProductNotFound() {
  return (
    <Grid container spacing={3} py={3} mt="20vh">
      <Grid>
        <Paper>
          <Typography variant="h3" align="center">
            Product Not Found
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ProductNotFound
