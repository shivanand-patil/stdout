# stdout.shivoncall.com

A terminal-themed blog built with Astro where I share thoughts, logs, and scripts.

## Features

- 🖥️ Terminal/hacker-style dark theme with monospace fonts
- 📝 Blog posts from Markdown files
- 📱 Responsive design
- ⚡ Fast static site generation with Astro
- 🚀 Ready for GitHub Pages deployment

## Development

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
stdout/
├── src/
│   ├── content/
│   │   └── posts/          # Blog posts (Markdown files)
│   ├── layouts/
│   │   └── Layout.astro    # Main layout component
│   └── pages/
│       ├── index.astro     # Home page
│       └── posts/
│           ├── index.astro # Posts listing
│           └── [...slug].astro # Individual post pages
├── public/
│   └── CNAME              # Custom domain for GitHub Pages
├── astro.config.mjs       # Astro configuration
└── package.json
```

## Adding New Posts

1. Create a new Markdown file in `src/content/posts/`
2. Add frontmatter with title, date, and optional description:

```markdown
---
title: "Your Post Title"
date: 2025-01-27
description: "Optional description"
---

# Your Post Content

Your blog post content goes here...
```

3. The post will automatically appear in the blog listing and be accessible at `/posts/your-filename`

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Create a new workflow file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Manual Deployment

1. Build the project: `npm run build`
2. The built files will be in the `dist/` directory
3. Upload the contents of `dist/` to your GitHub Pages repository

## Custom Domain

The site is configured for the custom domain `stdout.shivoncall.com`. The CNAME file is already set up in the `public/` directory.

## Theme

The blog features a terminal/hacker aesthetic with:
- Dark background (#0a0a0a)
- Green text (#00ff00) with glow effects
- Monospace fonts (Courier New, Monaco, Menlo)
- Responsive design for mobile devices

## License

MIT License - feel free to use this as a starting point for your own blog!
