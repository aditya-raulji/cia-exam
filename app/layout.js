'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import Link from 'next/link'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Next.js MUI Exam
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="/" passHref>
                  <Button color="inherit">Home</Button>
                </Link>
                <Link href="/mui/drawer" passHref>
                  <Button color="inherit">Drawer</Button>
                </Link>
                <Link href="/mui/button" passHref>
                  <Button color="inherit">Button</Button>
                </Link>
                <Link href="/mui/card" passHref>
                  <Button color="inherit">Card</Button>
                </Link>
                <Link href="/mui/dialog" passHref>
                  <Button color="inherit">Dialog</Button>
                </Link>
                <Link href="/mui/typography" passHref>
                  <Button color="inherit">Typography</Button>
                </Link>
                <Link href="/mui/navigation/appbar" passHref>
                  <Button color="inherit">AppBar</Button>
                </Link>
                <Link href="/mui/navigation/tabs" passHref>
                  <Button color="inherit">Tabs</Button>
                </Link>
                <Link href="/profile/jenil" passHref>
                  <Button color="inherit">Profile</Button>
                </Link>
                <Link href="/blog/101" passHref>
                  <Button color="inherit">Blog</Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          <Container sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
