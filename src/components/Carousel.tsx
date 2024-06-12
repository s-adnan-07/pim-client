import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/mousewheel'

type Props = {
  images: { sno: number; url: string; source?: string }[]
}

function Carousel({ images }: Props) {
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('')

  return (
    <Paper sx={{ py: 3 }}>
      {/* <Stack
        direction="row"
        spacing={3}
        sx={{ ml: 3, overflow: 'hidden' }}
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
      </Stack> */}

      <Swiper
        breakpoints={{
          1200: { slidesPerView: 5 },
          1000: { slidesPerView: 4 },
          770: { slidesPerView: 3 },
          550: { slidesPerView: 2 },
        }}
        modules={[Scrollbar, Mousewheel]}
        mousewheel={{ enabled: true }}
        scrollbar={{ draggable: true, hide: true }}
        slidesPerView={1}
        style={{ marginLeft: 24, marginRight: 24 }}
        // slidesPerView={5}
        // slidesOffsetBefore={10}
      >
        {images.map(img => (
          <SwiperSlide>
            <img
              src={img.url}
              height={197}
              onClick={() => {
                // setOpen(true)
                // setUrl(img.url)
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
