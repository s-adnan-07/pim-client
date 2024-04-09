import Grid from '@mui/material/Unstable_Grid2'
import Stack from '@mui/material/Stack'

type Props = {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  spacing?: number

  // Children are optional so that we can use empty component to give spacing
  children?: React.ReactNode
}

function GridStack({ xs, sm, md, lg, xl, spacing, children }: Props) {
  return (
    <Grid xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Stack spacing={spacing}>{children}</Stack>
    </Grid>
  )
}

export default GridStack
