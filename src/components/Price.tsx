import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'

type Props = {
  price: {
    EndUser: number
    ToolSelect: number
    Maintive: number
  }
}

const arr = ['EndUser', 'Maintive', 'ToolSelect']

function Price({ price }: Props) {
  return (
    <Paper>
      <Typography variant="h4">Prices</Typography>
      <List>
        {arr.map(item => (
          <ListItem>{item}</ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Price
