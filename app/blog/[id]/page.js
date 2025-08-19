'use client'

import { useParams } from 'next/navigation'
import { 
  Typography, 
  Box, 
  Paper, 
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Avatar,
  Button,
  Stack
} from '@mui/material'
import { 
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  Category as CategoryIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  Comment as CommentIcon
} from '@mui/icons-material'

export default function BlogPage() {
  const params = useParams()
  const blogId = params.id

  // Mock blog data based on ID
  const getBlogData = (id) => {
    const blogs = {
      '101': {
        title: 'Getting Started with Next.js 14 and Material UI',
        excerpt: 'Learn how to build modern web applications using Next.js 14 with the app router and Material UI components.',
        content: 'Next.js 14 introduces the new app router, which provides a more intuitive and powerful way to build React applications. Combined with Material UI, you can create beautiful, responsive interfaces with minimal effort. This post covers the basics of setting up a Next.js 14 project with Material UI, including routing, theming, and component usage.',
        author: 'John Doe',
        date: 'December 15, 2023',
        category: 'Web Development',
        readTime: '8 min read',
        tags: ['Next.js', 'Material UI', 'React', 'Web Development']
      },
      '102': {
        title: 'Advanced Material UI Component Patterns',
        excerpt: 'Discover advanced patterns and techniques for building complex UIs with Material UI components.',
        content: 'Material UI provides a comprehensive set of components that can be combined in various ways to create sophisticated user interfaces. This post explores advanced patterns such as compound components, render props, and custom hooks that can help you build more maintainable and reusable UI code.',
        author: 'Jane Smith',
        date: 'December 12, 2023',
        category: 'UI/UX Design',
        readTime: '12 min read',
        tags: ['Material UI', 'React', 'UI Design', 'Components']
      },
      '103': {
        title: 'Building Dynamic Routes in Next.js 14',
        excerpt: 'Master the art of creating dynamic and nested routes in Next.js 14 for better user experience.',
        content: 'Dynamic routing is one of the most powerful features in Next.js 14. It allows you to create routes that adapt based on data, user input, or other dynamic factors. This post covers everything from basic dynamic routes to advanced patterns like catch-all routes and optional catch-all routes.',
        author: 'Mike Johnson',
        date: 'December 10, 2023',
        category: 'Next.js',
        readTime: '10 min read',
        tags: ['Next.js', 'Routing', 'Dynamic Routes', 'Web Development']
      }
    }
    
    return blogs[id] || {
      title: `Blog Post ID: ${id}`,
      excerpt: 'This is a dynamic blog post that demonstrates Next.js 14 dynamic routing capabilities.',
      content: 'This blog post shows how dynamic routes work in Next.js 14. The ID parameter from the URL is extracted and used to display different content. You can change the ID in the URL to see different blog posts.',
      author: 'Anonymous Author',
      date: 'December 1, 2023',
      category: 'General',
      readTime: '5 min read',
      tags: ['Next.js', 'Dynamic Routing', 'Web Development']
    }
  }

  const blogData = getBlogData(blogId)

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Post ID: {blogId}
      </Typography>
      
      <Typography variant="body1" paragraph>
        This is a dynamic route that displays blog post information for ID: <strong>{blogId}</strong>
      </Typography>

      <Grid container spacing={3}>
        {/* Blog Header */}
        <Grid item xs={12}>
          <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'grey.50' }}>
            <Typography variant="h3" component="h1" gutterBottom>
              {blogData.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              {blogData.excerpt}
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center" 
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ mr: 1, bgcolor: 'primary.main' }}>
                  {blogData.author.charAt(0)}
                </Avatar>
                <Typography variant="body2">
                  {blogData.author}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarIcon sx={{ mr: 1, fontSize: 'small' }} />
                <Typography variant="body2">
                  {blogData.date}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CategoryIcon sx={{ mr: 1, fontSize: 'small' }} />
                <Typography variant="body2">
                  {blogData.category}
                </Typography>
              </Box>
              <Chip label={blogData.readTime} size="small" color="primary" />
            </Stack>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
              {blogData.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" variant="outlined" />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Blog Content */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {blogData.content}
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>

            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" gutterBottom>
              Key Takeaways
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" variant="body1" paragraph>
                Next.js 14 provides powerful dynamic routing capabilities
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Material UI components can be easily integrated with Next.js
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Dynamic routes allow for flexible and scalable applications
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            {/* Author Info */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                About the Author
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                  {blogData.author.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1">
                    {blogData.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Web Developer & Writer
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Passionate about modern web technologies and sharing knowledge with the developer community.
              </Typography>
            </Paper>

            {/* Related Posts */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Related Posts
              </Typography>
              <Stack spacing={2}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" gutterBottom>
                      Material UI Best Practices
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      5 min read
                    </Typography>
                  </CardContent>
                </Card>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" gutterBottom>
                      Next.js Performance Tips
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      7 min read
                    </Typography>
                  </CardContent>
                </Card>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" gutterBottom>
                      React Hooks Deep Dive
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      10 min read
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Paper>

            {/* Action Buttons */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Actions
              </Typography>
              <Stack spacing={2}>
                <Button 
                  variant="outlined" 
                  startIcon={<FavoriteIcon />}
                  fullWidth
                >
                  Like Post
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<ShareIcon />}
                  fullWidth
                >
                  Share Post
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<BookmarkIcon />}
                  fullWidth
                >
                  Bookmark
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<CommentIcon />}
                  fullWidth
                >
                  Add Comment
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        This page demonstrates dynamic routing in Next.js 14. The blog ID parameter from the URL is extracted and used to display different blog post content. You can change the ID in the URL (e.g., /blog/101, /blog/102, /blog/103) to see different blog posts, or use any other ID to see the default content.
      </Typography>
    </Box>
  )
}
