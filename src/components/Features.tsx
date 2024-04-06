import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

type Props = {
  features: string[]
}

// Note:
// > We can use <ul> and <li> instead of the list components
// > however, we have to style them using css if required

function Features({ features }: Props) {
  return (
    <Paper elevation={12}>
      <Typography variant="h4">Features</Typography>
      <List dense>
        {features.map(feature => (
          <ListItem>{feature}</ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Features
