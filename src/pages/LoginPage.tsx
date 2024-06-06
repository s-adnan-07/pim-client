import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'

import useLogin from '@/hooks/useLogin'

function LoginPage() {
  const {
    open,
    content,
    handleUsername,
    handlePassword,
    handleSubmit,
    handleClose,
  } = useLogin()

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
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message={content}
          />
        </Stack>
      </Paper>
    </Container>
  )
}

export default LoginPage
