import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

type Props = {
  brand: string
  model: string
  searchTitle: string
}

function Title({ brand, model, searchTitle }: Props) {
  return (
    <Paper>
      <Typography variant="h6" component="p" align="center">
        {brand} {model}
      </Typography>
      <Typography variant="h4" align="justify">
        {searchTitle}
      </Typography>
    </Paper>
  )
}

export default Title
