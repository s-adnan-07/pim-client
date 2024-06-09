import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Box from '@mui/material/Box'

type Category = { name: string; breadCrumbs: string }

type Props = {
  brand: string
  model: string
  searchTitle: string
  category?: Category[]
  soloCategory: Category
  warranty?: string
}

function Title({ brand, model, searchTitle, soloCategory, warranty }: Props) {
  // Dumb cookie monster put category field as an array of documents 🤦‍♂️
  // Therefore I have to extract the category document from the array with type assertion

  // *UPDATE: I can modify my controller in the backend to send category as a single object
  // TODO: Implement the above

  // Note: Since app is in strict mode the below line runs twice and throws an error
  // > more specifically the pop function runs twice, and in the second render
  // > throws error since we cannot destructure undefined
  // const { breadCrumbs } = category.pop() as Category

  // Workaround -> even if the below line runs twice, it still takes the first element from the array
  // const [{ breadCrumbs }] = category
  const { breadCrumbs } = soloCategory
  const categories = breadCrumbs.replace(/^\//, '').split('/')

  return (
    <Paper
      component={Box}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h6" component="p" align="center">
        {brand} {model}
      </Typography>

      <Typography variant="h4" align="justify" mt={2}>
        {searchTitle}
      </Typography>

      <Breadcrumbs sx={{ mt: 2 }}>
        {categories.map(cat => (
          <Typography>{cat}</Typography>
        ))}
      </Breadcrumbs>

      {warranty && <Typography mt={1}>Warranty - {warranty}</Typography>}
    </Paper>
  )
}

export default Title
