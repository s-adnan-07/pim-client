import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import useLogin from './hooks/useLogin'

function Login() {
  const { isLoading, handleChange, handleSubmit } = useLogin()

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Paper component="form" onChange={handleChange} onSubmit={handleSubmit}>
        <Stack>
          <Typography variant="h4">Login</Typography>
          <TextField name="username" label="username" type="text" required />
          <TextField
            name="password"
            label="password"
            type="password"
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default Login
