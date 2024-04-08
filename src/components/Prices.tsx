import Paper from '@mui/material/Paper'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import PaperHeader from '../ui/PaperHeader'
import TableWrapper from '../ui/TableWrapper'

type Props = {
  price: {
    EndUser: number
    ToolSelect: number
    Maintive: number
    Amazon: null
    Noon: null
    OnlineReseller: null
  }
}

const toClipboard = (entries: [string, number][]) =>
  entries.map(([key, value]) => `${key}\t${value}`).join('\r\n')

function Prices({ price }: Props) {
  const { Amazon, Noon, OnlineReseller, ...pricesToRender } = price
  const prices = Object.entries(pricesToRender)

  return (
    <Paper sx={{}}>
      <PaperHeader content={toClipboard(prices)}>Prices</PaperHeader>
      <TableWrapper>
        {prices.map(([key, value]) => (
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': { borderBottom: 0 },
            }}
          >
            <TableCell>{key}</TableCell>
            <TableCell>{value}</TableCell>
            <TableCell>AED</TableCell>
          </TableRow>
        ))}
      </TableWrapper>
    </Paper>
  )
}

export default Prices
