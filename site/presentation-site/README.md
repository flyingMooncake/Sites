# SentinelKarma Presentation Site

A modern, responsive presentation website for the SentinelKarma project - a decentralized threat intelligence network for Web3 RPC infrastructure.

## Features

- 🎨 Modern, dark-themed UI with gradient accents
- 📱 Fully responsive design
- ⚡ Built with React, TypeScript, and Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 Clean, accessible navigation
- 📊 Interactive sections showcasing features, architecture, tokenomics, and roadmap

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

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

## Project Structure

```
presentation-site/
├── public/
│   └── whitepaper.md          # Project whitepaper
├── src/
│   ├── App.tsx                # Main application component
│   ├── App.css                # Application styles
│   ├── index.css              # Global styles
│   └── main.tsx               # Application entry point
└── package.json
```

## Sections

1. **Hero** - Eye-catching introduction with key metrics
2. **Features** - 6 core features of SentinelKarma
3. **How It Works** - 3-layer architecture explanation
4. **Tokenomics** - Dual-token economic model
5. **Use Cases** - Real-world applications
6. **Roadmap** - Development timeline from Q1-Q4 2025
7. **CTA** - Call-to-action section
8. **Footer** - Links and resources

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **CSS3** - Styling with CSS variables

## Customization

### Colors

Edit CSS variables in `src/App.css`:

```css
:root {
  --primary: #8b5cf6;
  --secondary: #10b981;
  --background: #0a0a0a;
  --surface: #1a1a1a;
  /* ... */
}
```

### Content

All content is in `src/App.tsx`. Update text, links, and sections as needed.

## Deployment

### Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy Options

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configure in repository settings
- **Static hosting**: Upload `dist/` folder

## License

MIT License - See whitepaper for project details.

## Links

- [Whitepaper](/whitepaper.md)
- GitHub: https://github.com/sentinelkarma
- Discord: https://discord.gg/sentinelkarma
- Twitter: @sentinelkarma

---

Built with ❤️ for the SentinelKarma community
