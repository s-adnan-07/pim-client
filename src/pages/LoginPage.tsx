import useLogin from '@/hooks/useLogin'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

function LoginPage() {
  const { loginDetails, handleUsername, handlePassword, handleSubmit } =
    useLogin()

  return (
    // TODO: See if we can get 'xs' width without container
    // TODO: Need to see how to use formcontrol instead of textfield
    <Container maxWidth="xs" sx={{ mt: '20vh' }}>
      <Paper component="form" sx={{ p: 3 }}>
        <Stack>
          <Typography variant="h4" component="div">
            Login
          </Typography>
          <TextField label="username" type="text" onChange={handleUsername} />
          <TextField
            label="password"
            type="password"
            onChange={handlePassword}
          />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default LoginPage
