// import prod from '@/assets/hydratedProduct'
import { Helmet } from 'react-helmet-async'

import Grid from '@mui/material/Unstable_Grid2'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Stack from '@mui/material/Stack'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'

import SubjectIcon from '@mui/icons-material/Subject'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'

import useTab from '@/hooks/useTab'
import useProduct from '@/hooks/useProduct'

import GridStack from '@/ui/GridStack'
import Title from '@/components/Title'
import Carousel from '@/components/Carousel'
import Features from '@/components/Features'
import Specifications from '@/components/Specifications'
import Prices from '@/components/Prices'
import ItemsIncluded from '@/components/ItemsIncluded'
import Dimensions from '@/components/Dimensions'
import Stocks from '@/components/Stocks'

import ProductLoading from '@/states/ProductLoading'
import ProductNotFound from '@/states/ProductNotFound'
// import DocumentsCount from '@/icons/DocumentsCount'

function Product() {
  const { tabValue, switchTabs } = useTab()
  const { isLoading, prod } = useProduct()

  if (isLoading) return <ProductLoading />
  if (!prod) return <ProductNotFound />

  const {
    model,
    brand,
    searchTitle,
    s3Images,
    features,
    specification,
    whats_included,
    stocks,
    s3Documents,
  } = prod

  return (
    <>
      <Helmet>
        <title>
          {brand} {model} - {searchTitle}
        </title>
      </Helmet>

      <Grid container spacing={3} mt={2}>
        <GridStack>
          <Title {...prod} />
          {s3Images && <Carousel images={s3Images} />}
        </GridStack>
      </Grid>

      <Tabs value={tabValue} onChange={switchTabs}>
        <Tab label="Details" value={0} icon={<SubjectIcon />} />
        {s3Documents && (
          <Tab
            label="Documents"
            value={1}
            icon={
              <Badge badgeContent={s3Documents.length} color="info">
                <InsertDriveFileIcon />
              </Badge>
              // Note: Adding the above to a seperate component reduces space
              // > Why?
              // <DocumentsCount count={s3Documents.length} />
            }
          />
        )}
      </Tabs>

      <div hidden={tabValue !== 0}>
        <Grid container spacing={3} my={2} minHeight="100vh">
          <GridStack md={8}>
            {features && <Features features={features} />}
            {specification && <Specifications specification={specification} />}
          </GridStack>

          <GridStack md={4}>
            <Prices {...prod} />
            {whats_included && <ItemsIncluded items={whats_included} />}
            {stocks && <Stocks stocks={stocks} />}
            <Dimensions {...prod} />
          </GridStack>
        </Grid>
      </div>

      <div hidden={tabValue !== 1}>
        <Stack my={3} minHeight="100vh" maxWidth="300px">
          {s3Documents &&
            s3Documents.map(doc => (
              <Button
                startIcon={<InsertDriveFileIcon />}
                size="large"
                href={doc.url}
                target="_blank"
                sx={{ justifyContent: 'start', textTransform: 'none' }}
                key={doc.url}
              >
                {doc.fileType}
              </Button>
            ))}
        </Stack>
      </div>
    </>
  )
}

export default Product
