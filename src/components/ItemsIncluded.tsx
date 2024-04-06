import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

type Props = {
  items: string[]
}

function ItemsIncluded({ items }: Props) {
  return (
    <Paper elevation={12}>
      <Typography variant="h4">Items Included</Typography>
      <List dense>
        {items.map(item => (
          <ListItem>{item}</ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default ItemsIncluded
