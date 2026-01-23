# Unraid Deck Website

The official website for **Unraid Deck**, a native iOS companion app for managing Unraid servers.

Designed to be minimal, fast, and SEO-friendly.

![Unraid Deck Preview](./public/hero.jpg)

## Tech Stack

This project is built with a modern static site generation stack:

- **Framework**: [Astro](https://astro.build/) (SSG)
- **UI Components**: [Vue 3](https://vuejs.org/)
- **Styling**: [UnoCSS](https://unocss.dev/) (Atomic CSS)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## Features

- ⚡ **High Performance**: 100/100 Lighthouse score via Astro static generation.
- 🎨 **Themeable**: Native Light / Dark mode support.
- 📱 **Responsive**: Fully adapted for mobile and desktop.
- 🔍 **SEO Optimized**: Auto-generated Sitemap, Robots.txt, and Meta tags.
- 📝 **Blog System**: Markdown-based content management.

## Development

### Prerequisites

- Node.js (v18+)
- pnpm (Recommended)

### Commands

**Install Dependencies**
```bash
pnpm install
```

**Start Development Server**
```bash
pnpm dev
# Runs on http://localhost:1977
```

**Build for Production**
```bash
pnpm build
# Generates static files in ./dist
```

**Preview Production Build**
```bash
pnpm preview
```

## License

MIT © [mccray-s](https://github.com/mccray-s)
