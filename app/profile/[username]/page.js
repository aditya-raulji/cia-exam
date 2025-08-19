'use client'

import { useParams } from 'next/navigation'
import { 
  Typography, 
  Box, 
  Paper, 
  Avatar, 
  Grid,
  Card,
  CardContent,
  Chip,
  Divider
} from '@mui/material'
import { 
  Person as PersonIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  School as SchoolIcon
} from '@mui/icons-material'

export default function ProfilePage() {
  const params = useParams()
  const username = params.username

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile Page: {username}
      </Typography>
      
      <Typography variant="body1" paragraph>
        This is a dynamic route that displays profile information for the user: <strong>{username}</strong>
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Header */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Avatar 
              sx={{ 
                width: 120, 
                height: 120, 
                fontSize: '3rem',
                mx: 'auto',
                mb: 2,
                bgcolor: 'primary.main'
              }}
            >
              {username.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h5" gutterBottom>
              {username.charAt(0).toUpperCase() + username.slice(1)}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Web Developer & Designer
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="React" color="primary" size="small" />
              <Chip label="Next.js" color="primary" size="small" />
              <Chip label="Material UI" color="secondary" size="small" />
            </Box>
          </Paper>
        </Grid>

        {/* Profile Details */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    {username}@example.com
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    New York, NY
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <WorkIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    5+ years experience
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    Computer Science
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Skills Section */}
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Skills & Technologies
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Frontend
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="React" color="primary" />
                <Chip label="Next.js" color="primary" />
                <Chip label="TypeScript" color="primary" />
                <Chip label="Material UI" color="secondary" />
                <Chip label="Tailwind CSS" color="secondary" />
              </Box>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Backend
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="Node.js" color="info" />
                <Chip label="Express" color="info" />
                <Chip label="MongoDB" color="info" />
                <Chip label="PostgreSQL" color="info" />
              </Box>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Tools & Others
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="Git" color="warning" />
                <Chip label="Docker" color="warning" />
                <Chip label="AWS" color="warning" />
                <Chip label="Figma" color="success" />
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Projects */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Projects
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      E-commerce Platform
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      A full-stack e-commerce application built with Next.js and Material UI.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="Next.js" size="small" />
                      <Chip label="Material UI" size="small" />
                      <Chip label="MongoDB" size="small" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Task Management App
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      A collaborative task management tool with real-time updates.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="React" size="small" />
                      <Chip label="Firebase" size="small" />
                      <Chip label="Material UI" size="small" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Portfolio Website
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      A responsive portfolio website showcasing projects and skills.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="HTML/CSS" size="small" />
                      <Chip label="JavaScript" size="small" />
                      <Chip label="Responsive" size="small" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        This page demonstrates dynamic routing in Next.js 14. The username parameter from the URL is extracted and used to display personalized content. You can change the username in the URL to see different profile information.
      </Typography>
    </Box>
  )
}
