Website Link : https://portfolio-seven-jade-13.vercel.app/
# Portfolio Website

A modern, responsive portfolio website built with React and Vite featuring light/dark theme toggle and contact form integration.

## Features

- **Home Page**: Welcome section with profile avatar and navigation links
- **About Page**: Personal biography, skills, education, and experience
- **Projects Page**: Showcase of projects with thumbnails, descriptions, and links
- **Contact Page**: Contact form with email integration, social media links, and resume download
- **Light/Dark Theme**: Toggle between light and dark modes
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS (for Contact Form)

The contact form uses EmailJS to send emails. Follow these steps:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Add Your Assets

- Place your profile image in `public/` folder and update the path in `src/pages/Home.js`
- Place your resume PDF in `public/resume.pdf`
- Update project images/thumbnails in `src/pages/Projects.js`
- Update social media links in `src/pages/Contact.js`

### 4. Customize Content

Update the content in each page component:
- `src/pages/Home.js` - Introduction and welcome message
- `src/pages/About.js` - Biography, skills, education, experience
- `src/pages/Projects.js` - Project details and links
- `src/pages/Contact.js` - Social media links

### 5. Run the Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/
  │   └── Navigation.js
  ├── context/
  │   └── ThemeContext.js
  ├── pages/
  │   ├── Home.js
  │   ├── About.js
  │   ├── Projects.js
  │   └── Contact.js
  ├── styles/
  │   ├── App.css
  │   ├── Navigation.css
  │   ├── Home.css
  │   ├── About.css
  │   ├── Projects.css
  │   └── Contact.css
  ├── App.js
  └── index.js
```

## Technologies Used

- React 18
- Vite
- React Router DOM
- EmailJS
- CSS3 with CSS Variables

- Responsive Design
