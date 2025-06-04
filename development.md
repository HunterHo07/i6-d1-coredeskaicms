# CoreDeskAiCMS - Development Specification

## Tech Stack Overview

### Core Framework
- **Next.js 14**: App Router, Server Components, Streaming
- **React 18**: Concurrent features, Suspense boundaries
- **Node.js**: Runtime environment

### Styling & UI
- **Tailwind CSS 3.4**: Utility-first styling
- **Custom CSS Variables**: Dynamic theming
- **Responsive Design**: Mobile-first approach

### Animation & Effects
- **GSAP 3.12**: Timeline animations, ScrollTrigger
- **Three.js**: 3D graphics and WebGL
- **@react-three/fiber**: React Three.js integration
- **@react-three/drei**: Three.js helpers and abstractions
- **Framer Motion**: React animations

### Data & State Management
- **React Hooks**: useState, useEffect, useContext
- **Local Storage**: Persistent demo data
- **JSON**: Mock API responses
- **Cookies**: Session simulation

### Icons & Assets
- **Lucide React**: Modern icon library
- **Custom SVG**: Brand logos and illustrations
- **Recharts**: Data visualization

### Development Tools
- **ESLint**: Code linting (disabled for rapid development)
- **Git**: Version control
- **npm**: Package management

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── demo/              # Demo page
│   ├── pitch/             # Pitch deck page
│   ├── why-us/            # Why us page
│   ├── roadmap/           # Roadmap page
│   └── signup/            # Sign-up page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   ├── effects/          # Animation components
│   └── layout/           # Layout components
├── lib/                  # Utilities and helpers
│   ├── utils.js         # General utilities
│   ├── animations.js    # GSAP animations
│   └── data.js          # Mock data
├── hooks/               # Custom React hooks
└── assets/              # Static assets
    ├── images/
    ├── icons/
    └── data/
```

## Page Architecture

### 1. HomePage (/) - Priority 1
**Sections:**
- Hero Section (Advanced 3D + GSAP)
- Problem/Solution
- Feature Preview (Multi-layer)
- MVP Demo Loop
- Competitor Comparison
- Testimonials
- Pricing Plans
- Trust Elements
- Early Adopter CTA

**Effects Pool Assignment:**
- Hero: 3D Tilt + Parallax + Typing Effect
- Features: Scroll-triggered Animations + Ghost Cursors
- Demo: Auto Simulation Animation + AI Response Bubbles
- Pricing: 3D Card Hover + Floating Tooltips

### 2. DemoPage (/demo) - Priority 1
**Sections:**
- Interactive Dashboard Simulation
- API Connection Demo
- Data Mapping Interface
- Real-time Updates Simulation
- Export Functionality Demo
- Multi-level Demo Layers (3-10 levels)

**Effects Pool Assignment:**
- Dashboard: Terminal Typing + Matrix Effect
- API Demo: Multi-User Cursor Simulation
- Data Flow: Animated SVGs + Scroll Morphing
- Export: Loading Screens + Success Animations

### 3. Additional Pages - Priority 2
- Pitch Deck: Investor-focused presentation
- Why Us: Competitive advantages
- Roadmap: Product development timeline
- Sign-up: Lead capture with simulation

## Component Library

### Base Components
```javascript
// Button variants
<Button variant="primary|secondary|ghost" size="sm|md|lg" />

// Input components
<Input type="text|email|password" />
<Select options={[]} />
<Textarea />

// Layout components
<Container />
<Grid cols={2|3|4} />
<Stack direction="row|col" />

// Feedback components
<Toast />
<Modal />
<Loading />
```

### Effect Components
```javascript
// Animation wrappers
<FadeIn />
<SlideIn direction="left|right|up|down" />
<ScaleIn />
<RotateIn />

// 3D components
<Scene3D />
<FloatingObject />
<ParallaxLayer />

// Interactive effects
<HoverEffect />
<ScrollTrigger />
<TypeWriter />
<MatrixRain />
```

## Animation System

### GSAP Timeline Structure
```javascript
// Master timeline for page load
const masterTL = gsap.timeline();

// Section-specific timelines
const heroTL = gsap.timeline();
const featuresTL = gsap.timeline();

// ScrollTrigger integration
ScrollTrigger.create({
  trigger: ".section",
  start: "top 80%",
  animation: sectionTL
});
```

### Effect Pool Implementation
```javascript
const effectPool = [
  'multiUserCursor',
  'matrixEffect',
  'aiEyeTracker',
  'parallaxScroll',
  'scrollMorphing',
  'terminalTyping',
  'ghostCursors',
  'infiniteZoom',
  'floatingTooltips',
  '3dTilt',
  'audioResponsive'
];

// Random effect assignment
const assignRandomEffect = (section) => {
  const randomEffect = effectPool[Math.floor(Math.random() * effectPool.length)];
  return applyEffect(section, randomEffect);
};
```

## Data Architecture

### Mock API Simulation
```javascript
// localStorage structure
{
  "apiConnections": [
    {
      "id": "conn_1",
      "name": "Web3 Transactions",
      "url": "https://api.example.com/transactions",
      "token": "demo_token_123",
      "schedule": "*/5 * * * *", // Every 5 minutes
      "lastFetch": "2024-01-15T10:30:00Z",
      "status": "active"
    }
  ],
  "dashboardData": {
    "totalTransactions": 15420,
    "totalValue": "$2,450,000",
    "activeUsers": 1250,
    "conversionRate": "3.2%"
  },
  "tableData": [
    {
      "id": "tx_001",
      "timestamp": "2024-01-15T10:25:00Z",
      "amount": "$1,250.00",
      "status": "completed",
      "user": "user_12345"
    }
  ]
}
```

### Demo Simulation Engine
```javascript
// Real-time data updates
const simulateRealTimeData = () => {
  setInterval(() => {
    updateDashboardMetrics();
    addNewTransaction();
    updateUserActivity();
  }, 3000);
};

// File upload simulation
const simulateFileUpload = (file) => {
  return new Promise((resolve) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      updateProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        resolve({ success: true, url: 'demo_file_url' });
      }
    }, 200);
  });
};
```

## Performance Optimization

### Code Splitting
```javascript
// Dynamic imports for heavy components
const ThreeScene = dynamic(() => import('@/components/ThreeScene'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

// Route-based splitting
const DemoPage = lazy(() => import('@/app/demo/page'));
```

### Asset Optimization
- **Images**: WebP format, responsive sizes
- **Fonts**: Preload critical fonts
- **3D Models**: Compressed GLTF/GLB files
- **Animations**: Optimized GSAP timelines

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npm run analyze
```

## Responsive Design Strategy

### Breakpoints
```css
/* Tailwind breakpoints */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized animations for mobile performance

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: 4.5:1 minimum ratio
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML, ARIA labels
- **Focus Management**: Visible focus indicators

### Implementation
```javascript
// Focus management
const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  // Focus trap logic
};

// ARIA labels
<button aria-label="Close modal" aria-expanded={isOpen}>
  <CloseIcon />
</button>
```

## Testing Strategy

### Manual Testing Checklist
- [ ] All animations load without errors
- [ ] Responsive design works on all breakpoints
- [ ] Demo functionality simulates correctly
- [ ] Export features generate files
- [ ] Form submissions work
- [ ] Navigation is intuitive
- [ ] Performance is smooth (60fps)

### Browser Compatibility
- **Chrome**: 90+ (Primary)
- **Firefox**: 88+ (Secondary)
- **Safari**: 14+ (Secondary)
- **Edge**: 90+ (Secondary)

## Deployment Configuration

### Build Optimization
```javascript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
};
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_ANALYTICS_ID=demo_analytics
```

## Version Control Strategy

### Git Workflow
- **main**: Production-ready code
- **develop**: Integration branch
- **feature/***: Feature development
- **hotfix/***: Critical fixes

### Commit Convention
```
feat: add hero section animations
fix: resolve mobile navigation issue
docs: update development guide
style: improve button hover effects
refactor: optimize GSAP timelines
```

## Package Versions

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "gsap": "^3.12.0",
    "three": "^0.158.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.294.0",
    "recharts": "^2.8.0",
    "react-hot-toast": "^2.4.0",
    "tailwindcss": "^3.4.0"
  }
}
```
