'use client'

import { useState } from 'react'
import { 
  Typography, 
  Box, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  Alert,
  Stack
} from '@mui/material'
import { 
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Info as InfoIcon
} from '@mui/icons-material'

export default function DialogPage() {
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    notifications: false,
    gender: 'other'
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  
  const handleFormOpen = () => setFormOpen(true)
  const handleFormClose = () => setFormOpen(false)
  
  const handleConfirmOpen = () => setConfirmOpen(true)
  const handleConfirmClose = () => setConfirmOpen(false)
  
  const handleAlertOpen = () => setAlertOpen(true)
  const handleAlertClose = () => setAlertOpen(false)

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    handleFormClose()
    setFormData({
      name: '',
      email: '',
      category: '',
      notifications: false,
      gender: 'other'
    })
  }

  const handleDelete = () => {
    console.log('Item deleted')
    handleConfirmClose()
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        This is /mui/dialog route
      </Typography>
      
      <Typography variant="body1" paragraph>
        This page demonstrates various Material UI Dialog components with different types of content and interactions.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button 
          variant="contained" 
          onClick={handleOpen}
          startIcon={<InfoIcon />}
        >
          Simple Dialog
        </Button>
        
        <Button 
          variant="contained" 
          onClick={handleFormOpen}
          startIcon={<AddIcon />}
          color="success"
        >
          Form Dialog
        </Button>
        
        <Button 
          variant="contained" 
          onClick={handleConfirmOpen}
          startIcon={<DeleteIcon />}
          color="error"
        >
          Confirmation Dialog
        </Button>
        
        <Button 
          variant="contained" 
          onClick={handleAlertOpen}
          startIcon={<EditIcon />}
          color="warning"
        >
          Alert Dialog
        </Button>
      </Stack>

      {/* Simple Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Simple Information Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a simple dialog that displays information to the user. It can contain text, images, or any other content.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Form Dialog */}
      <Dialog open={formOpen} onClose={handleFormClose} maxWidth="sm" fullWidth>
        <DialogTitle>User Registration Form</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                label="Category"
                onChange={handleInputChange}
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="hobbyist">Hobbyist</MenuItem>
              </Select>
            </FormControl>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleInputChange}
                />
              }
              label="Receive email notifications"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={confirmOpen} onClose={handleConfirmClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmClose}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Alert Dialog */}
      <Dialog open={alertOpen} onClose={handleAlertClose}>
        <DialogTitle>Important Notice</DialogTitle>
        <DialogContent>
          <Alert severity="warning" sx={{ mb: 2 }}>
            This is a warning message that requires user attention.
          </Alert>
          <DialogContentText>
            Please review the information carefully before proceeding. This dialog demonstrates how to include alerts and other components within dialogs.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose} variant="contained">
            Acknowledge
          </Button>
        </DialogActions>
      </Dialog>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        Dialogs are modal components that overlay the main content and require user interaction. They're perfect for forms, confirmations, alerts, and other focused interactions. Material UI provides various dialog types including simple dialogs, form dialogs, and confirmation dialogs.
      </Typography>
    </Box>
  )
}
