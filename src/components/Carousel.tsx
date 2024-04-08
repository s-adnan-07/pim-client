import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'

type Props = {
  images: { sno: number; url: string; source?: string }[]
}

function Carousel({ images }: Props) {
  return (
    <Paper sx={{ py: 3 }}>
      <Stack
        direction="row"
        spacing={3}
        sx={{ ml: 3, overflow: ' hidden' }}
        // sx={{ display: 'flex', justifyContent: 'space-around' }}
      >
        {images.map(img => (
          <img src={img.url} height={252} />
        ))}
      </Stack>
    </Paper>
  )
}

export default Carousel
