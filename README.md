# Next.js 14 + Material UI Exam Project

A comprehensive Next.js 14 application demonstrating Material UI components and various routing patterns.

## 🚀 Features

- **Next.js 14** with App Router
- **Material UI v5** components
- **JavaScript** (TypeScript disabled as requested)
- **Responsive Design** with Material UI's responsive system
- **Dynamic Routing** examples
- **Comprehensive Component Showcase**

## 📁 Project Structure

```
app/
├── layout.js                 # Root layout with Material UI theme and navigation
├── page.js                   # Home page with route overview
├── mui/                      # Material UI component routes
│   ├── drawer/
│   │   └── page.js          # Drawer component showcase
│   ├── button/
│   │   └── page.js          # Button component showcase
│   ├── card/
│   │   └── page.js          # Card component showcase
│   ├── dialog/
│   │   └── page.js          # Dialog component showcase
│   ├── typography/
│   │   └── page.js          # Typography component showcase
│   └── navigation/
│       ├── appbar/
│       │   └── page.js      # AppBar component showcase
│       └── tabs/
│           └── page.js      # Tabs component showcase
├── profile/
│   └── [username]/
│       └── page.js          # Dynamic profile route
└── blog/
    └── [id]/
        └── page.js          # Dynamic blog route
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If cloning from git
   git clone <repository-url>
   cd nextjs-mui-exam
   
   # Or extract the downloaded project
   cd Next.js\ Exam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Routes

### Home
- **Route**: `/`
- **Description**: Overview of all available routes with navigation cards

### Material UI Component Routes
- **Route**: `/mui/drawer`
- **Component**: Material UI Drawer with navigation menu

- **Route**: `/mui/button`
- **Component**: Various button variants, sizes, and styles

- **Route**: `/mui/card`
- **Component**: Different card layouts and content types

- **Route**: `/mui/dialog`
- **Component**: Multiple dialog types (simple, form, confirmation, alert)

- **Route**: `/mui/typography`
- **Component**: Typography variants, colors, and alignments

- **Route**: `/mui/navigation/appbar`
- **Component**: AppBar variations with search, navigation, and user controls

- **Route**: `/mui/navigation/tabs`
- **Component**: Tab components with different orientations and content

### Dynamic Routes
- **Route**: `/profile/[username]`
- **Example**: `/profile/jenil` → Shows profile for user "jenil"
- **Component**: Dynamic profile page with user information

- **Route**: `/blog/[id]`
- **Example**: `/blog/101` → Shows blog post with ID "101"
- **Component**: Dynamic blog post with content based on ID

## 🎨 Material UI Components Used

- **Layout**: Box, Container, Grid, Paper, Stack
- **Navigation**: AppBar, Toolbar, Drawer, Tabs, Tab
- **Input**: Button, TextField, Select, Checkbox, Radio
- **Data Display**: Card, Typography, Avatar, Chip, Badge
- **Feedback**: Dialog, Alert
- **Icons**: Material Icons from @mui/icons-material

## 🔧 Customization

### Theme
The Material UI theme is configured in `app/layout.js` with:
- Primary color: Blue (#1976d2)
- Secondary color: Pink (#dc004e)
- Custom spacing and typography

### Adding New Routes
1. Create a new folder in the `app` directory
2. Add a `page.js` file
3. Update the navigation in `app/layout.js`
4. Add the route to the home page overview

### Adding New Components
1. Import the component from `@mui/material`
2. Use it in your page component
3. Follow Material UI's component API documentation

## 📱 Responsive Design

The application is fully responsive using Material UI's responsive system:
- **xs**: 0px+ (mobile)
- **sm**: 600px+ (tablet)
- **md**: 900px+ (desktop)
- **lg**: 1200px+ (large desktop)
- **xl**: 1536px+ (extra large)

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 📚 Learning Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Material UI Documentation](https://mui.com/material-ui/)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [Next.js App Router](https://nextjs.org/docs/app)

## 🤝 Contributing

This is an exam project demonstrating Next.js 14 and Material UI integration. Feel free to use it as a reference or starting point for your own projects.

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed.

## 🎉 Features Demonstrated

✅ **Next.js 14 App Router**  
✅ **Material UI v5 Integration**  
✅ **Dynamic Routing**  
✅ **Responsive Design**  
✅ **Component Showcase**  
✅ **Navigation System**  
✅ **Theme Configuration**  
✅ **Interactive Components**  
✅ **Form Handling**  
✅ **State Management**  

---

**Happy Coding! 🚀**
# cia-exam
