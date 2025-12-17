# Portfolio Website

A modern, responsive portfolio website built with React showcasing cybersecurity expertise, projects, skills, and professional experience.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations and transitions
- **Animated Skill Bars**: Progress bars that animate when scrolled into view
- **Dark Hero Section**: Eye-catching hero section with pure black background
- **Certificates Showcase**: Dedicated page to display certifications and achievements
- **Project Gallery**: Interactive grid layout showcasing key projects
- **Experience Timeline**: Professional experience displayed in an organized timeline format
- **Contact Section**: Modern contact card with social media integration
- **Scroll Animations**: Fade-in animations triggered on scroll for better user engagement

## Technologies Used

- **React** (v19.2.3) - UI library
- **React Router DOM** (v7.10.1) - Client-side routing
- **Webpack** (v5.103.0) - Module bundler
- **Babel** - JavaScript compiler
- **CSS3** - Styling with modern features
- **Google Fonts** - Inter, Poppins, Permanent Marker, Staatliches

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Tennyson66/aaruth-portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3001`

## Build

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Project Structure

```
fucks/
├── public/
│   ├── index.html
│   ├── favicon.svg
│   └── certificates/
├── src/
│   ├── App.jsx              # Main application component
│   ├── index.js             # Entry point
│   ├── CertificatesRoute.jsx
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Hero.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── SkillBars.jsx
│   │   ├── NonTechSkillBars.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── main.css
│   └── assets/
├── webpack.config.js
├── package.json
└── README.md
```

## Key Sections

### Hero
- Full-screen black background hero section
- Centered content with typing animation
- Navigation menu with links to resume, certificates, and contact

### About
- Personal introduction and bio
- Profile image with modern styling

### Education
- Academic background with institutions and locations
- Clean grid layout

### Experience
- Professional experience timeline
- CTF participation and internship details
- Freelance work highlights

### Skills
- **Technical Skills**: Cybersecurity, programming languages, tools
- **Non-Technical Skills**: Soft skills with visual progress bars
- Animated progress bars on scroll

### Projects
- Portfolio website
- Movie recommendation system
- ModusMapping cybersecurity project

### Contact
- Email and social media links
- Modern card-based design
- Copyright footer

## Customization

### Update Personal Information
Edit the following files:
- `src/components/Hero.jsx` - Name and title
- `src/components/About.jsx` - Bio and description
- `src/components/Education.jsx` - Educational background
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Projects showcase

### Styling
All styles are located in:
- `src/styles/main.css` - Main stylesheet
- `src/components/Untitled-1.css` - Additional component styles

### Colors
Primary color scheme:
- Primary Blue: `#2563eb`
- Accent Cyan: `#38bdf8`
- Dark Background: `#000000`
- Text: `#232323`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Aaruth V P. All rights reserved.

## Contact

For any inquiries or issues, please reach out through the contact section on the portfolio website.
