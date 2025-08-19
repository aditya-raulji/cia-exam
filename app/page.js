'use client'

import { Typography, Box, Paper, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  const routes = [
    { path: '/mui/drawer', name: 'Drawer', description: 'Material UI Drawer component' },
    { path: '/mui/button', name: 'Button', description: 'Material UI Button component' },
    { path: '/mui/card', name: 'Card', description: 'Material UI Card component' },
    { path: '/mui/dialog', name: 'Dialog', description: 'Material UI Dialog component' },
    { path: '/mui/typography', name: 'Typography', description: 'Material UI Typography component' },
    { path: '/mui/navigation/appbar', name: 'AppBar', description: 'Material UI AppBar component' },
    { path: '/mui/navigation/tabs', name: 'Tabs', description: 'Material UI Tabs component' },
    { path: '/profile/jenil', name: 'Profile', description: 'Dynamic profile route example' },
    { path: '/blog/101', name: 'Blog', description: 'Dynamic blog route example' },
  ]

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Next.js MUI Exam
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        This is a demonstration of Next.js 14 with Material UI components and various routing patterns.
      </Typography>
      
      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Available Routes:
      </Typography>
      
      <Grid container spacing={3}>
        {routes.map((route) => (
          <Grid item xs={12} sm={6} md={4} key={route.path}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {route.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {route.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={route.path} passHref>
                  <Button size="small" color="primary">
                    View Route
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
