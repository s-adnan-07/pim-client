import Paper from '@mui/material/Paper'
import PaperHeader from '../ui/PaperHeader'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import TableWrapper from '../ui/TableWrapper'
import capitalize from '../utils/capitalize'

type Props = {
  package_dimension: {
    length: number
    width: number
    height: number
    weight: number
    dimension_unit: string
    weight_unit: string
  }
}

// TODO: Repeating function, make a seperate util
const toClipboard = (entries: [string, number][]) =>
  entries.map(([key, value]) => `${key}\t${value}`).join('\r\n')

// TODO: capitalize the display labels
function Dimensions({ package_dimension }: Props) {
  const { dimension_unit, weight_unit, weight, ...dimensions } =
    package_dimension

  const dimension_values = Object.entries(dimensions)

  return (
    <Paper sx={{}}>
      <PaperHeader content={toClipboard(dimension_values)}>
        Packaging
      </PaperHeader>
      <TableWrapper>
        {dimension_values.map(([key, value]) => (
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': { borderBottom: 0 },
            }}
          >
            <TableCell align="center">{capitalize(key)}</TableCell>
            <TableCell align="center">{value} cm</TableCell>
          </TableRow>
        ))}
      </TableWrapper>
    </Paper>
  )
}

export default Dimensions
