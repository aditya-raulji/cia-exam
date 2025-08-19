'use client'

import { 
  Typography, 
  Box, 
  Paper, 
  Grid,
  Divider
} from '@mui/material'

export default function TypographyPage() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        This is /mui/typography route
      </Typography>
      
      <Typography variant="body1" paragraph>
        This page demonstrates various Material UI Typography components with different variants, sizes, and styles.
      </Typography>

      <Grid container spacing={3}>
        {/* Headings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Heading Variants
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Typography variant="h1" gutterBottom>
              h1. Heading 1
            </Typography>
            <Typography variant="h2" gutterBottom>
              h2. Heading 2
            </Typography>
            <Typography variant="h3" gutterBottom>
              h3. Heading 3
            </Typography>
            <Typography variant="h4" gutterBottom>
              h4. Heading 4
            </Typography>
            <Typography variant="h5" gutterBottom>
              h5. Heading 5
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading 6
            </Typography>
          </Paper>
        </Grid>

        {/* Body Text */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Body Text Variants
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Paper>
        </Grid>

        {/* Subtitle and Caption */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Subtitle & Caption
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              OVERLINE TEXT
            </Typography>
          </Paper>
        </Grid>

        {/* Colors and Alignment */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Colors & Alignment
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Typography variant="body1" color="primary" gutterBottom>
              Primary color text
            </Typography>
            <Typography variant="body1" color="secondary" gutterBottom>
              Secondary color text
            </Typography>
            <Typography variant="body1" color="error" gutterBottom>
              Error color text
            </Typography>
            <Typography variant="body1" color="warning" gutterBottom>
              Warning color text
            </Typography>
            <Typography variant="body1" color="info" gutterBottom>
              Info color text
            </Typography>
            <Typography variant="body1" color="success" gutterBottom>
              Success color text
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Secondary text color
            </Typography>
          </Paper>
        </Grid>

        {/* Text Alignment */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Text Alignment
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Typography variant="body1" align="left" gutterBottom>
              Left aligned text
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Center aligned text
            </Typography>
            <Typography variant="body1" align="right" gutterBottom>
              Right aligned text
            </Typography>
            <Typography variant="body1" align="justify" gutterBottom>
              Justified text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Paper>
        </Grid>

        {/* Font Weights */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Font Weights
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Typography variant="body1" fontWeight="light" gutterBottom>
              Light weight text
            </Typography>
            <Typography variant="body1" fontWeight="normal" gutterBottom>
              Normal weight text
            </Typography>
            <Typography variant="body1" fontWeight="medium" gutterBottom>
              Medium weight text
            </Typography>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
              Bold weight text
            </Typography>
          </Paper>
        </Grid>

        {/* Font Sizes */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Font Sizes
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Typography variant="body1" fontSize="0.75rem" gutterBottom>
              Small text (0.75rem)
            </Typography>
            <Typography variant="body1" fontSize="1rem" gutterBottom>
              Normal text (1rem)
            </Typography>
            <Typography variant="body1" fontSize="1.25rem" gutterBottom>
              Large text (1.25rem)
            </Typography>
            <Typography variant="body1" fontSize="1.5rem" gutterBottom>
              Extra large text (1.5rem)
            </Typography>
          </Paper>
        </Grid>

        {/* Interactive Elements */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Interactive Elements
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Typography 
              variant="body1" 
              component="a" 
              href="#" 
              color="primary"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              gutterBottom
              display="block"
            >
              This is a link styled with Typography
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                cursor: 'pointer',
                '&:hover': { color: 'primary.main' }
              }}
              gutterBottom
            >
              This text has hover effects
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        Typography is a fundamental component in Material UI that provides consistent text styling across your application. It supports various variants, colors, alignments, and can be customized with themes and styling props. The component automatically applies the appropriate font size, font weight, line height, and letter spacing based on the variant prop.
      </Typography>
    </Box>
  )
}
