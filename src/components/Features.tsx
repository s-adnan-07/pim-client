import Paper from '@mui/material/Paper'
import PaperHeader from '../ui/PaperHeader'

type Props = {
  features: string[]
}

const toClipBoard = (features: string[]) => features.join('\r\n')

// Note:
// > We can use <ul> and <li> instead of the list components
// > however, we have to style them using css if required

function Features({ features }: Props) {
  return (
    <Paper sx={{ paddingBottom: 2 }}>
      <PaperHeader content={toClipBoard(features)}>Features</PaperHeader>
      <ul>
        {features.map(feature => (
          <li>{feature}</li>
        ))}
      </ul>
    </Paper>
  )
}

export default Features
