'use client'

import { useState } from 'react'
import { 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Paper,
  Stack,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip
} from '@mui/material'
import { 
  Home as HomeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Favorite as FavoriteIcon,
  ThumbUp as ThumbUpIcon,
  Star as StarIcon
} from '@mui/icons-material'

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function TabsPage() {
  const [value, setValue] = useState(0)
  const [iconValue, setIconValue] = useState(0)
  const [scrollableValue, setScrollableValue] = useState(0)
  const [verticalValue, setVerticalValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleIconChange = (event, newValue) => {
    setIconValue(newValue)
  }

  const handleScrollableChange = (event, newValue) => {
    setScrollableValue(newValue)
  }

  const handleVerticalChange = (event, newValue) => {
    setVerticalValue(newValue)
  }

  const tabData = [
    {
      label: 'Home',
      icon: <HomeIcon />,
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>
            Home Tab Content
          </Typography>
          <Typography variant="body1" paragraph>
            This is the home tab content. It can contain any components, forms, or information you want to display.
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              Welcome to the Home Section
            </Typography>
            <Typography variant="body2">
              This demonstrates how tabs can organize different types of content in a clean, organized way.
            </Typography>
          </Paper>
        </Box>
      )
    },
    {
      label: 'Work',
      icon: <WorkIcon />,
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>
            Work Tab Content
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Project Alpha" 
                secondary="Web Development - In Progress"
              />
              <Chip label="Active" color="success" size="small" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ThumbUpIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Project Beta" 
                secondary="Mobile App - Planning Phase"
              />
              <Chip label="Planning" color="info" size="small" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Project Gamma" 
                secondary="UI/UX Design - Completed"
              />
              <Chip label="Completed" color="primary" size="small" />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      label: 'Education',
      icon: <SchoolIcon />,
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>
            Education Tab Content
          </Typography>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Bachelor's Degree in Computer Science
              </Typography>
              <Typography variant="body2" color="text.secondary">
                University of Technology • 2018-2022
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Graduated with honors. Specialized in software engineering and web development.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Web Development Bootcamp
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Code Academy • 2023
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Intensive 12-week program covering modern web technologies and frameworks.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )
    },
    {
      label: 'Profile',
      icon: <PersonIcon />,
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>
            Profile Tab Content
          </Typography>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Typography variant="body1" paragraph>
              Name: John Doe
            </Typography>
            <Typography variant="body1" paragraph>
              Email: john.doe@example.com
            </Typography>
            <Typography variant="body1" paragraph>
              Location: New York, NY
            </Typography>
            <Typography variant="body1" paragraph>
              Experience: 5+ years in web development
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="React" color="primary" />
              <Chip label="Next.js" color="primary" />
              <Chip label="Material UI" color="secondary" />
              <Chip label="TypeScript" color="secondary" />
              <Chip label="Node.js" color="info" />
              <Chip label="MongoDB" color="info" />
            </Box>
          </Paper>
        </Box>
      )
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      content: (
        <Box>
          <Typography variant="h5" gutterBottom>
            Settings Tab Content
          </Typography>
          <Typography variant="body1" paragraph>
            This tab demonstrates how you can include forms, configuration options, and other interactive elements.
          </Typography>
          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              Configuration Options
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Settings and preferences would typically be displayed here with form controls, toggles, and other input elements.
            </Typography>
          </Paper>
        </Box>
      )
    }
  ]

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        This is /mui/navigation/tabs route
      </Typography>
      
      <Typography variant="body1" paragraph>
        This page demonstrates various Material UI Tabs components with different configurations and content types.
      </Typography>

      <Stack spacing={4}>
        {/* Basic Tabs */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Basic Tabs
          </Typography>
          <Paper sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Work" {...a11yProps(1)} />
                <Tab label="Education" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {tabData[0].content}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {tabData[1].content}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {tabData[2].content}
            </TabPanel>
          </Paper>
        </Box>

        {/* Tabs with Icons */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Tabs with Icons
          </Typography>
          <Paper sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={iconValue} onChange={handleIconChange} aria-label="icon tabs example">
                <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} />
                <Tab icon={<WorkIcon />} label="Work" {...a11yProps(1)} />
                <Tab icon={<SchoolIcon />} label="Education" {...a11yProps(2)} />
                <Tab icon={<PersonIcon />} label="Profile" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={iconValue} index={0}>
              {tabData[0].content}
            </TabPanel>
            <TabPanel value={iconValue} index={1}>
              {tabData[1].content}
            </TabPanel>
            <TabPanel value={iconValue} index={2}>
              {tabData[2].content}
            </TabPanel>
            <TabPanel value={iconValue} index={3}>
              {tabData[3].content}
            </TabPanel>
          </Paper>
        </Box>

        {/* Scrollable Tabs */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Scrollable Tabs
          </Typography>
          <Paper sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs 
                value={scrollableValue} 
                onChange={handleScrollableChange} 
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable tabs example"
              >
                {tabData.map((tab, index) => (
                  <Tab key={index} label={tab.label} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Box>
            {tabData.map((tab, index) => (
              <TabPanel key={index} value={scrollableValue} index={index}>
                {tab.content}
              </TabPanel>
            ))}
          </Paper>
        </Box>

        {/* Vertical Tabs */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Vertical Tabs
          </Typography>
          <Paper sx={{ width: '100%', display: 'flex' }}>
            <Tabs
              orientation="vertical"
              value={verticalValue}
              onChange={handleVerticalChange}
              aria-label="vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider', minWidth: 200 }}
            >
              {tabData.map((tab, index) => (
                <Tab key={index} label={tab.label} {...a11yProps(index)} />
              ))}
            </Tabs>
            {tabData.map((tab, index) => (
              <TabPanel key={index} value={verticalValue} index={index}>
                {tab.content}
              </TabPanel>
            ))}
          </Paper>
        </Box>

        {/* Icon Only Tabs */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Icon Only Tabs
          </Typography>
          <Paper sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="icon only tabs example">
                <Tab icon={<HomeIcon />} aria-label="home" />
                <Tab icon={<WorkIcon />} aria-label="work" />
                <Tab icon={<SchoolIcon />} aria-label="education" />
                <Tab icon={<PersonIcon />} aria-label="profile" />
                <Tab icon={<SettingsIcon />} aria-label="settings" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {tabData[0].content}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {tabData[1].content}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {tabData[2].content}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {tabData[3].content}
            </TabPanel>
            <TabPanel value={value} index={4}>
              {tabData[4].content}
            </TabPanel>
          </Paper>
        </Box>
      </Stack>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        Tabs are navigation components that allow users to switch between different views or sections of content. Material UI Tabs support various configurations including horizontal and vertical orientations, icons, scrollable behavior, and custom styling. They're perfect for organizing related content into logical groups.
      </Typography>
    </Box>
  )
}
