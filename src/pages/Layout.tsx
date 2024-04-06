import Container from '@mui/material/Container'

type Props = {
  children: any
}

function Layout({ children }: Props) {
  return <Container maxWidth="xl">{children}</Container>
}

export default Layout
