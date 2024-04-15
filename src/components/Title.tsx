import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Box from '@mui/material/Box'

type Category = { name: string; breadCrumbs: string }

type Props = {
  brand: string
  model: string
  searchTitle: string
  category: Category[]
}

function Title({ brand, model, searchTitle, category }: Props) {
  // Dumb cookie monster put category field as an array of documents 🤦‍♂️
  // Therefore I have to extract the category document from the array with type assertion

  // Note: Since app is in strict mode the below line runs twice and throws an error
  // > more specifically the pop function runs twice, and in the second render
  // > throws error since we cannot destructure undefined
  // const { breadCrumbs } = category.pop() as Category

  // Workaround -> even if the below line runs twice, it still takes the first element from the array
  const [{ breadCrumbs }] = category
  const categories = breadCrumbs.replace(/^\//, '').split('/')

  return (
    <Paper>
      <Typography variant="h6" component="p" align="center">
        {brand} {model}
      </Typography>

      <Typography variant="h4" align="justify" mt={2}>
        {searchTitle}
      </Typography>

      {/* The breadcrumbs are wrapper in a flexbox to center them */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Breadcrumbs>
          {categories.map(cat => (
            <Typography>{cat}</Typography>
          ))}
        </Breadcrumbs>
      </Box>
    </Paper>
  )
}

export default Title
