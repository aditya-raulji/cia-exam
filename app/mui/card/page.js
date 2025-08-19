'use client'

import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  CardActionArea,
  CardHeader,
  Avatar,
  Grid,
  Button,
  Chip,
  Rating
} from '@mui/material'
import { 
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
  Star as StarIcon
} from '@mui/icons-material'

export default function CardPage() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        This is /mui/card route
      </Typography>
      
      <Typography variant="body1" paragraph>
        This page demonstrates various Material UI Card components with different layouts and content types.
      </Typography>

      <Grid container spacing={3}>
        {/* Basic Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Basic Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a simple card with just content. It's perfect for displaying text information.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card with Media */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/400x140?nature"
              alt="Nature"
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Card with Media
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This card includes an image and demonstrates how media can enhance the visual appeal.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card with Actions */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Card with Actions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This card includes action buttons at the bottom for user interaction.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card with Header */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <StarIcon />
                </Avatar>
              }
              action={
                <Button size="small">
                  <MoreVertIcon />
                </Button>
              }
              title="Card with Header"
              subheader="September 14, 2023"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This card includes a header with an avatar, title, subtitle, and action button.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Interactive Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/400x140?technology"
                alt="Technology"
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Interactive Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card is clickable and includes hover effects. Perfect for navigation or detailed views.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Complex Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/400x140?food"
              alt="Food"
            />
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Complex Card
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={4.5} precision={0.5} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  4.5 (128 reviews)
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                This card demonstrates multiple features including ratings, chips, and detailed actions.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip label="Popular" color="primary" size="small" />
                <Chip label="Trending" color="secondary" size="small" />
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
              <Box>
                <Button size="small" startIcon={<FavoriteIcon />}>
                  Like
                </Button>
                <Button size="small" startIcon={<ShareIcon />}>
                  Share
                </Button>
              </Box>
              <Button variant="contained" size="small">
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        Cards are versatile components that can display various types of content including text, images, media, and interactive elements. They're commonly used for displaying information in a structured and visually appealing way.
      </Typography>
    </Box>
  )
}
