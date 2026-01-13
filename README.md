# Kontrolity.com

Future ready Autonomous Intelligence

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

   This generates static files in the `out` directory.

## 📦 Deployment to GitHub Pages

### Setup (One-time)

1. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

The GitHub Actions workflow will automatically:
- Build your Next.js site
- Export it as static HTML
- Deploy to GitHub Pages

### View Your Site

After deployment completes (2-3 minutes), your site will be available at:
- `https://yourusername.github.io/kontrolity.com` (if repo name is kontrolity.com)
- Or your custom domain if configured

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Radix UI
- **3D Graphics:** Three.js

## 📁 Project Structure

```
kontrolity.com/
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   └── index.js       # Home page
├── src/
│   ├── components/
│   │   ├── landing/   # Landing page sections
│   │   └── ui/        # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── styles/        # Global styles
├── public/            # Static assets
└── .github/
    └── workflows/     # GitHub Actions
```

## 🎨 Customization

### Update Content

Edit the landing page sections in `src/components/landing/`:
- `HeroSection.js` - Hero/banner
- `BentoSection.js` - Feature cards
- `ProductsSection.js` - Products showcase
- `CTASection.js` - Call-to-action
- `Footer.js` - Footer content

### Update Logo

Replace the logo URL in `src/components/landing/Logo.js` or add your logo to the `public/` directory.

### Update Colors

Modify `tailwind.config.js` and `src/styles/globals.css` to change the color scheme.

## 🔍 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint

## 📝 Notes

- The site is configured for static export (`output: 'export'` in `next.config.js`)
- Images are unoptimized for static hosting
- The `.nojekyll` file ensures GitHub Pages serves files with underscores

## 🐛 Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Clear the cache: `rm -rf .next out && npm run build`

### GitHub Actions Fails
- Verify GitHub Pages is enabled in repository settings
- Check the Actions tab for error details
- Ensure the workflow has proper permissions

### Local Development Issues
- Make sure you're using Node.js 18 or higher: `node --version`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🤝 Support

For questions or issues:
- Email: founder@kontrolity.com
- Visit: [kubegraf.io](https://kubegraf.io)

---

Built with ❤️ for the future of infrastructure intelligence
