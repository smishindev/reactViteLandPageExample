# Modern Freelancer Landing Page

A beautiful, responsive landing page built with React, TypeScript, and Material-UI. Perfect for showcasing your freelancing services and portfolio.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **TypeScript**: Type-safe development for better code quality
- **Material-UI**: Modern component library with consistent design system
- **Framer Motion**: Smooth animations and transitions
- **Section-based**: Hero, About, Services, Skills, Contact sections

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Material-UI (MUI)** - React component library
- **Framer Motion** - Animation library
- **Vite** - Fast build tool
- **CSS-in-JS** - Emotion/styled-components

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🔧 Installation & Setup

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### 1. Personal Information
Update the following components with your information:

- **Hero Section** (`src/components/sections/Hero.tsx`):
  - Change name, title, and description
  - Update call-to-action text

- **About Section** (`src/components/sections/About.tsx`):
  - Replace avatar placeholder with your photo
  - Update bio and achievements

- **Contact Section** (`src/components/sections/Contact.tsx`):
  - Update email, phone, and location
  - Add your social media links

### 2. Services & Skills
- **Services** (`src/components/sections/Services.tsx`): Update with your actual services
- **Skills** (`src/components/sections/Skills.tsx`): Modify skill levels and technologies

### 3. Colors & Branding
Edit the theme in `src/App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Your brand color
    },
    // ... other colors
  },
});
```

### 4. Typography
Update fonts in the theme or add new Google Fonts in `index.html`.

## 📱 Sections Overview

1. **Navigation** - Sticky header with smooth scrolling
2. **Hero** - Eye-catching intro with call-to-action buttons
3. **About** - Personal story and achievements
4. **Services** - What you offer with technology tags
5. **Skills** - Technical expertise with progress bars
6. **Contact** - Contact form and social links
7. **Footer** - Copyright and additional links

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Deploy to popular platforms:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **Heroku**: Add buildpack for static sites

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you create improvements that others might benefit from, consider submitting a pull request!

## 📧 Support

If you have any questions or need help customizing this template, feel free to reach out!

---

**Happy Coding!** 🎉