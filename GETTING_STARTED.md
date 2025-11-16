# Getting Started - Digital Portfolio Website

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation & Running

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:3000
```

The development server will automatically reload when you make changes!

## 📝 Customizing Content

All portfolio content is centralized in `/lib/resume-data.ts`. Edit this file to update:

```typescript
export const resumeData = {
  personal: { /* Your contact info */ },
  education: [ /* Your education */ ],
  experience: [ /* Your work history */ ],
  skills: { /* Your skills by category */ },
  projects: [ /* Your projects */ ],
  certifications: [ /* Your certifications */ ],
  leadership: [ /* Your leadership roles */ ],
  ethicsAndGlobalAwareness: { /* Your ethics statement */ },
  futureAspirations: [ /* Your goals */ ],
  swot: { /* Your SWOT analysis */ },
  testimonials: [ /* Your testimonials */ ]
}
```

## 🎨 Customizing Styling

### Global Styles
- Edit `/app/globals.css` for site-wide styling
- Update `/tailwind.config.ts` for color scheme

### Component Styling
Each enhanced component uses:
- Tailwind CSS utility classes
- Framer Motion inline styles for animations
- GSAP for scroll-triggered effects

### Theme Colors
Current color scheme uses:
- **Primary**: Purple (`from-purple-400 to-purple-600`)
- **Secondary**: Pink (`from-pink-400 to-pink-600`)
- **Background**: Dark slate (`bg-slate-950`)

To change the theme, search and replace these color classes across all components.

## 🎬 Animation Performance

All animations are optimized for 60fps:
- ✅ GSAP uses `will-change` for GPU acceleration
- ✅ Framer Motion uses transform-based animations
- ✅ Canvas particles run at 60fps refresh rate
- ✅ Scroll triggers are debounced

## 📦 Production Build

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Netlify: Connect your Git repository via Netlify dashboard
- GitHub Pages: Configure `next.config.js` for static export
- Docker: See `/Dockerfile` (if exists)

## 🔧 Project Structure

```
components/
├── navbar-enhanced.tsx       # Navigation with scroll-spy
├── footer.tsx                # Footer with social links
├── theme-provider.tsx        # Dark theme setup
└── sections/
    ├── hero-enhanced.tsx           # Landing page
    ├── introduction-enhanced.tsx   # About you
    ├── resume-enhanced.tsx         # CV/Resume
    ├── projects-enhanced.tsx       # Portfolio
    ├── skills-enhanced.tsx         # Skills showcase
    ├── swot-enhanced.tsx           # SWOT analysis
    └── testimonials-enhanced.tsx   # Testimonials

lib/
├── resume-data.ts            # All portfolio content
└── utils.ts                  # Helper functions

app/
├── page.tsx                  # Main page (orchestrator)
├── layout.tsx                # Root layout
└── globals.css               # Global styles
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear build cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 Already in Use
```bash
# Run on different port
npm run dev -- -p 3001
```

### Tailwind Styles Not Showing
- Ensure `tailwind.config.ts` includes all component paths
- Rebuild: `npm run dev`

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives)

## 🤝 Support

For issues or questions:
1. Check existing components for patterns
2. Review component-specific animations in `sections/`
3. Verify `resume-data.ts` has required fields

## 📄 License

This project is open source. Feel free to customize for your own use!

---

**Happy coding! 🎉** Your portfolio is ready to showcase your achievements!
