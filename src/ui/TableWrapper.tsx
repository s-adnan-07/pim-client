import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'

type Props = {
  children?: any
}

function TableWrapper({ children }: Props) {
  return (
    <TableContainer>
      <Table>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableWrapper
