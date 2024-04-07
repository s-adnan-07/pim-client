import Paper from '@mui/material/Paper'
import PaperHeader from '../ui/PaperHeader'

type Props = {
  items: string[]
}

const toClipBoard = (items: string[]) => items.join('\r\n')

function ItemsIncluded({ items }: Props) {
  return (
    <Paper sx={{}}>
      <PaperHeader content={toClipBoard(items)}>Items Included</PaperHeader>
      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </Paper>
  )
}

export default ItemsIncluded
