# PUNX Portal - Systems Hub

A modern, animated landing page for PUNX business systems featuring dark/light mode, smooth transitions, and a beautiful UI.

## 🚀 Features

- **Dark/Light Mode Toggle** - Smooth theme switching with localStorage persistence
- **Animated Hero Section** - Floating logo, gradient text, staggered tag animations
- **System Cards Grid** - 4 main systems with hover effects and gradient borders
- **Glass Morphism Navigation** - Modern frosted glass navigation bar
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Framer Motion powered transitions and hover effects

## 💻 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first CSS with custom theme
- **Framer Motion** - Production-ready animations
- **Lucide React** - Beautiful icon library

## 🎨 Design System

### Colors
- **Primary:** Purple (#8b5cf6)
- **Accent:** Cyan (#06b6d4)
- **Dark Background:** #0a0a0a
- **Light Background:** #ffffff

### Typography
- **Font Family:** Inter (Google Fonts)
- **Weights:** 300-800

## 📦 Available Scripts

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Development

The development server is running at **http://localhost:5173**

### Project Structure

```
punx-portal/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Animated hero section
│   │   ├── SystemCard.jsx    # System cards with hover effects
│   │   └── ThemeToggle.jsx   # Dark/Light mode toggle
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles & Tailwind config
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Quick Start

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173

## 📱 Systems Included

1. **DTR Tracker** - Daily Time Record tracking
2. **Accounts Flow** - Account management & workflows
3. **Expense Tracker** - Budget & expense management
4. **Receipt Liquidation** - Receipt processing system

## 🎯 Customization

### Adding New Systems

Edit the `systems` array in `App.jsx`:

```jsx
{
  id: 'new-system',
  name: 'New System Name',
  description: 'System description',
  icon: IconName,  // Import from lucide-react
  link: '#',
  color: 'from-purple-500 to-cyan-500',
  stats: 'Feature highlight'
}
```

### Changing Colors

Update the `@theme` section in `src/index.css` to customize the color palette.

## 📄 License

© 2026 PUNX Systems. All rights reserved.
