import Paper from '@mui/material/Paper'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { Stock } from '@/types/product.model'
import PaperHeader from '@/ui/PaperHeader'
import TableWrapper from '@/ui/TableWrapper'

type Props = {
  stocks: Stock[]
}

function Stocks({ stocks }: Props) {
  return (
    <Paper sx={{}}>
      <PaperHeader content="">Stocks</PaperHeader>
      <TableWrapper>
        {stocks.map(({ warehouseName, stock }) => (
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': { borderBottom: 0 },
            }}
          >
            <TableCell align="center">{warehouseName}</TableCell>
            <TableCell align="center">{stock}</TableCell>
          </TableRow>
        ))}
      </TableWrapper>
    </Paper>
  )
}

export default Stocks
