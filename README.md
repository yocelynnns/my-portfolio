# 🌟 Yocelyn Theona Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring interactive animations, real-time chat functionality, and a showcase of software engineering projects.

## ✨ Live Demo
[![Portfolio Demo](https://img.shields.io/badge/🚀-Live_Demo-9B5DE5?style=for-the-badge)](https://github.com/yocelynnns/portfolio)  

## 🎯 Features

### 🎨 Modern Design
- **Responsive Layout** - Works perfectly on all devices
- **Gradient Animations** - Smooth color transitions and effects
- **Interactive UI** - Hover effects and engaging animations
- **Custom Scrollbars** - Styled scrollbars with gradient colors

### 🚀 Core Features
- **Real-time Chat Room** - Live chat with Firebase Authentication
- **Project Showcase** - Filterable project gallery with detailed modals
- **Interactive Contact Form** - Email integration with EmailJS
- **Animated Sections** - Smooth scroll animations with AOS library
- **3D Avatar Effect** - Interactive portfolio picture with mouse tracking

### 📱 Sections
1. **Hero Section** - Introduction with animated text and download CV
2. **About Me** - Skills, timeline, and personal story with tab navigation
3. **Projects** - Filterable project gallery with detailed modals
4. **Contact** - Real-time chat and contact form with Firebase integration
5. **Footer** - Social links and quick information

## 🛠️ Tech Stack

### Frontend
- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library for skill icons

### Backend & Services
- **Firebase** - Authentication and real-time database
- **Firestore** - NoSQL database for chat messages
- **EmailJS** - Email service for contact form
- **AOS (Animate On Scroll)** - Scroll animations library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 📁 Project Structure

```
src/
├── components/                  # React components organized by feature
│   ├── layout/                  # Navigation & structure components
│   │   ├── Navbar/              # Navigation bar with mobile menu
│   │   │   ├── DesktopNav.jsx   # Desktop navigation links
│   │   │   ├── MobileMenu.jsx   # Mobile navigation menu
│   │   │   ├── Navbar.hooks.js  # Custom hooks for navbar
│   │   │   └── Navbar.jsx       # Main navbar component
│   │   ├── Footer/              # Footer section
│   │   │   ├── Footer.constants.js # Footer data
│   │   │   ├── Footer.jsx       # Main footer component
│   │   │   ├── FooterLinks.jsx  # Social links section
│   │   │   └── FooterStats.jsx  # Statistics display
│   │   └── ThemeToggle.jsx      # Theme switching component
│   │
│   ├── sections/                # Main page sections
│   │   ├── Hero/                # Introduction section
│   │   │   ├── Hero.constants.js # Hero content data
│   │   │   ├── Hero.jsx         # Main hero component
│   │   │   ├── HeroAvatar.jsx   # 3D interactive avatar
│   │   │   └── HeroContent.jsx  # Hero text content
│   │   ├── About/               # About me section
│   │   │   ├── About.constants.js # About data
│   │   │   ├── About.hooks.js   # Custom hooks for About
│   │   │   ├── About.jsx        # Main About component
│   │   │   ├── AboutContent.jsx # Tab content wrapper
│   │   │   ├── AboutStory.jsx   # Personal story section
│   │   │   ├── AboutTabs.jsx    # Tab navigation
│   │   │   ├── JourneyTimeline.jsx # Career timeline
│   │   │   └── SkillsGrid.jsx   # Skills display
│   │   ├── Projects/            # Projects showcase
│   │   │   ├── ProjectCard.jsx  # Individual project card
│   │   │   ├── ProjectModal.jsx # Project details modal
│   │   │   ├── Projects.constants.js # Project constants
│   │   │   ├── Projects.hooks.js # Project filtering logic
│   │   │   ├── Projects.jsx     # Main Projects component
│   │   │   ├── ProjectsCTA.jsx  # Call-to-action section
│   │   │   ├── ProjectsFilter.jsx # Category filters
│   │   │   └── ProjectsGrid.jsx # Projects grid layout
│   │   └── Contact/             # Contact section
│   │       ├── ChatRoom/        # Real-time chat
│   │       │   ├── ChatRoom.hooks.js # Chat hooks
│   │       │   ├── ChatRoom.jsx # Main chat component
│   │       │   ├── LoginPrompt.jsx # Google login prompt
│   │       │   ├── MessageBubble.jsx # Individual messages
│   │       │   └── UserHeader.jsx # Chat user header
│   │       ├── Contact.jsx      # Main Contact component
│   │       └── ContactForm/     # Email contact form
│   │           ├── ContactForm.hooks.js # Form hooks
│   │           └── ContactForm.jsx # Contact form
│   │
│   └── effects/                 # Visual effects components
│       ├── BlurText.jsx         # Blur text animation
│       ├── Particles.jsx        # Background particles
│       └── ShinyText/           # Shiny text effect
│           ├── ShinyText.css    # Shiny text styles
│           └── ShinyText.jsx    # Shiny text component
│
├── data/                        # Static data files
│   ├── navigation.js            # Navigation menu items
│   ├── projects.js              # Projects data with details
│   ├── skills.js               # Technical skills data
│   └── timeline.js             # Career timeline data
│
├── hooks/                       # Custom React hooks
│   └── useAOS.js               # AOS animation initialization
│
├── utils/                       # Utility functions
│   ├── auth.js                 # Authentication utilities
│   └── firebase.js             # Firebase configuration
│
├── styles/                      # Global CSS styles
│   ├── animations.css          # Custom animation keyframes
│   ├── globals.css             # Global styles
│   └── scrollbars.css          # Custom scrollbar styles
│
└── assets/                      # Static assets
    ├── yoce.jpg                # Portfolio avatar image
    ├── react.svg               # React logo
    └── yocelyn_cv.pdf          # Downloadable CV
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- **Important**: You'll need to create your own Firebase and EmailJS accounts for local development

### Quick Start for Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yocelynnns/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment configuration**
```bash
# Copy the example environment file
cp .env.example .env
```

4. **Configure your own services** (Required - Use your own accounts)
   - **Firebase**: Create your own project at [firebase.google.com](https://firebase.google.com)
   - **EmailJS**: Create your own account at [emailjs.com](https://www.emailjs.com)
   - Add YOUR credentials to the `.env` file

5. **Start development server**
```bash
npm run dev
```

### 🔧 Detailed Service Setup

#### Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Enable Authentication → Google provider
4. Create Firestore database (start in test mode for development)
5. Go to Project Settings → General → Your apps → Web app
6. Register your app and copy the configuration
7. Add the configuration to your `.env` file:

#### EmailJS Configuration
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create a new email template
4. Go to Account → API Keys
5. Copy your Public Key and add it to `.env`
6. Get your Service ID and Template ID from the dashboard

### Build for Production
```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary Gradient**: `from-pink-500 to-purple-600`
- **Background**: `bg-gray-50`
- **Text**: `text-gray-900` (dark), `text-gray-600` (light)
- **Accents**: Pink, Purple, Blue gradients

### Typography
- **Headings**: Inter, bold weights
- **Body**: Inter, regular weight
- **Font Sizes**: Responsive scaling from mobile to desktop

### Animations
- **AOS Library**: Scroll-triggered animations
- **Custom CSS**: Keyframe animations for special effects
- **Transition Classes**: Tailwind transition utilities

## Documentations

- [React](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Firebase](https://firebase.google.com/) - Backend services
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

---

<div align="center">
Made with ❤️ by Yocelyn Theona Setiawan
</div>
