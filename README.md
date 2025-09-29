# Portfolio Website

A modern, responsive portfolio website with a hacker/coder aesthetic built with React. Features interactive animations, terminal-style UI, and a comprehensive showcase of your life cycle, achievements, and projects.

## Features

- 🎨 **Hacker/Coder Theme**: Dark theme with green terminal colors and matrix rain effect
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Interactive Animations**: Smooth transitions and hover effects using Framer Motion
- 🎯 **Life Cycle Timeline**: Showcase your journey and achievements
- 💼 **Project Showcase**: Filterable project gallery with detailed information
- 🛠️ **Skills Section**: Interactive skill bars with categories
- 📧 **Contact Form**: Working contact form with validation
- 🌊 **Matrix Rain**: Animated background effect
- 🎮 **Terminal UI**: Terminal-style loading screen and interactive elements

## Sections

1. **Hero**: Animated introduction with typing effect
2. **About**: Personal information with tabbed interface
3. **Life Cycle**: Timeline of your journey and achievements
4. **Skills**: Technical skills with progress bars
5. **Projects**: Portfolio of your work with filtering
6. **Contact**: Contact form and social links

## Technologies Used

- React 18
- Framer Motion (animations)
- React Icons
- CSS3 (styling)
- HTML5

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.js`):
   - Update the typing texts array
   - Modify the description
   - Update statistics

2. **About Section** (`src/components/About.js`):
   - Update personal description
   - Modify skills and their levels
   - Update mission and values

3. **Life Cycle** (`src/components/LifeCycle.js`):
   - Add your timeline events
   - Update achievements and milestones
   - Modify categories as needed

4. **Projects** (`src/components/Projects.js`):
   - Add your projects
   - Update project details, technologies, and links
   - Modify categories and filters

5. **Contact** (`src/components/Contact.js`):
   - Update contact information
   - Add your social media links
   - Modify the contact form endpoint

### Styling

- Main theme colors are defined in `src/index.css`
- Component-specific styles are in individual CSS files
- The hacker theme uses:
  - Background: `#0a0a0a` (dark black)
  - Primary: `#00ff00` (bright green)
  - Text: `#ffffff` (white) and `#cccccc` (light gray)

### Fonts

The website uses:
- **Orbitron**: For headings and titles
- **JetBrains Mono**: For code and terminal elements

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Matrix rain effect inspired by the Matrix movie
- Terminal UI design inspired by hacker aesthetics
- Icons provided by React Icons
- Animations powered by Framer Motion

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me.

---

**Happy Coding! 🚀**
