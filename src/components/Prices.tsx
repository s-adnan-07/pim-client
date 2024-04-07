import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import PaperHeader from '../ui/PaperHeader'

type Props = {
  price: {
    EndUser: number
    ToolSelect: number
    Maintive: number
  }
}

function Prices({ price }: Props) {
  return (
    <Paper sx={{}}>
      <PaperHeader>Prices</PaperHeader>
      <Stack divider={<Divider />} m={2}>
        <p>EndUser {price.EndUser}</p>
        <p>ToolSelect {price.ToolSelect}</p>
        <p>Maintive {price.Maintive}</p>
      </Stack>
    </Paper>
  )
}

export default Prices
