import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'

import PaperHeader from '../ui/PaperHeader'

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
      <TableContainer>
        <Table>
          <TableBody>
            {specification.map(spec => (
              <TableRow>
                <TableCell>{spec.attribute}</TableCell>
                <TableCell>{spec.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Specifications
