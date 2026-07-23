# Vertex Trading Website

A professional investment management website featuring two distinct service offerings:

## Services

### 1. Long-Term Investing
- Data-driven diversified portfolios
- 3 investment tiers (Starter, Growth, Premium)
- Quarterly to weekly rebalancing
- Passive wealth building strategy
- Average returns: 12-18% annually

### 2. Managed Trading
- Active daily/aggressive trading
- Expert trader management
- Real-time portfolio updates
- 3 service tiers (Growth, Pro, Elite)
- Average returns: 15-25% annually

## Tech Stack

- **Framework:** Next.js 14+ (React)
- **Styling:** CSS Modules
- **Language:** TypeScript
- **Deployment:** Vercel (GitHub Pages compatible)

## Project Structure

```
app/
  ├── layout.tsx           # Root layout
  ├── globals.css          # Global styles
  ├── page.tsx             # Home page
  ├── home.module.css      # Home page styles
  ├── investing/           # Long-term investing section
  │   ├── page.tsx
  │   └── investing.module.css
  └── managed/             # Managed trading section
      ├── page.tsx
      └── managed.module.css
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Features

✅ Responsive design (mobile, tablet, desktop)
✅ Two distinct service landing pages
✅ Pricing tiers with comparison
✅ Professional gradient color schemes
✅ Smooth animations and transitions
✅ CTA-optimized sections
✅ Fast page loads with Next.js optimization

## Color Schemes

- **Long-Term Investing:** Blue (#1e40af) - Trust & Stability
- **Managed Trading:** Purple (#7c3aed) - Premium & Expert
- **Accent:** Amber (#fbbf24) - Action & Energy

## Deployment

This site is ready to deploy on:
- Vercel (recommended)
- GitHub Pages
- Any Node.js hosting

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Next Steps

- [ ] Add payment integration (Stripe/PayPal)
- [ ] Create client dashboard
- [ ] Add FAQ section
- [ ] Implement blog/news section
- [ ] Add client testimonials
- [ ] Email notification system
- [ ] Performance analytics
- [ ] A/B testing setup

## License

MIT
