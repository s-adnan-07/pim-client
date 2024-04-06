import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'

type Props = {
  specification: {
    _id: any
    attribute: string
    value: string | number
    filter?: boolean
  }[]
}

function Specifications({ specification }: Props) {
  return (
    <Paper elevation={12}>
      <Typography variant="h4">Specifications</Typography>
      <TableContainer>
        <Table>
          {/* <TableHead>
            <TableRow>
              <TableCell align="center">Attribute</TableCell>
              <TableCell align="center">Value</TableCell>
            </TableRow>
          </TableHead> */}
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
