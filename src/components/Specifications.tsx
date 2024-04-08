import Paper from '@mui/material/Paper'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import PaperHeader from '../ui/PaperHeader'
import TableWrapper from '../ui/TableWrapper'

type Props = {
  specification: {
    _id: any
    attribute: string
    value: string | number
    filter?: boolean
  }[]
}

// Todo: Need to make the below function more readable
const getSpecs = ({ specification }: Props) =>
  specification.map(s => `${s.attribute}\t${s.value}`).join('\r\n')

function Specifications({ specification }: Props) {
  return (
    <Paper sx={{}}>
      <PaperHeader content={getSpecs({ specification })}>
        Specifications
      </PaperHeader>
      <TableWrapper>
        {specification.map(spec => (
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': { borderBottom: 0 },
            }}
          >
            <TableCell align="center">{spec.attribute}</TableCell>
            <TableCell align="center">{spec.value}</TableCell>
          </TableRow>
        ))}
      </TableWrapper>
    </Paper>
  )
}

export default Specifications
