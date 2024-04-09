import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'

type Props = {
  images: { sno: number; url: string; source?: string }[]
}

function Carousel({ images }: Props) {
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('')

  return (
    <Paper sx={{ py: 3 }}>
      <Stack
        direction="row"
        spacing={3}
        sx={{ ml: 3, overflow: ' hidden' }}
        // sx={{ display: 'flex', justifyContent: 'space-around' }}
      >
        {images.map(img => (
          <img
            src={img.url}
            height={197}
            onClick={() => {
              setOpen(true)
              setUrl(img.url)
            }}
          />
        ))}
      </Stack>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => {
          setOpen(false)
          setUrl('')
        }}
      >
        <img src={url} height="90%" />
      </Backdrop>
    </Paper>
  )
}

export default Carousel
