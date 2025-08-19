'use client'

import { useState } from 'react'
import { 
  Typography, 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Button,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material'
import { 
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Article as ArticleIcon,
  Settings as SettingsIcon
} from '@mui/icons-material'

export default function DrawerPage() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile/jenil' },
    { text: 'Blog', icon: <ArticleIcon />, path: '/blog/101' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/mui/settings' },
  ]

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        This is /mui/drawer route
      </Typography>
      
      <Typography variant="body1" paragraph>
        This page demonstrates the Material UI Drawer component with a temporary drawer that slides in from the left.
      </Typography>

      <Button 
        variant="contained" 
        onClick={toggleDrawer(true)}
        startIcon={<MenuIcon />}
        sx={{ mb: 2 }}
      >
        Open Drawer
      </Button>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                Navigation Menu
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Typography variant="body2" color="text.secondary">
        Click the button above to open the drawer. The drawer contains a list of navigation items with icons.
      </Typography>
    </Box>
  )
}
