# WarrantyAI - Development Documentation

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 14**: App Router, Server Components, TypeScript
- **React 18**: Hooks, Context, Suspense boundaries
- **Tailwind CSS 3.4.1**: Utility-first styling (not v4)
- **CSS Modules**: Component-specific styles

### Animation & Effects
- **GSAP**: ScrollTrigger for parallax effects
- **Framer Motion**: Component animations and transitions
- **CSS Animations**: Custom keyframes and transforms
- **Three.js**: 3D rendering and WebGL effects

### 3D/VR Technologies
- **Three.js**: 3D scene management and rendering
- **Phaser3**: Game engine for interactive simulations
- **WebGL**: Hardware-accelerated graphics
- **WebXR**: Future AR/VR capabilities

### Utilities & Integrations
- **QR Code**: Generation and scanning functionality
- **Lucide React**: Icon library for UI elements
- **Sharp**: Image optimization and processing
- **TypeScript**: Type safety and developer experience

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── demo/              # Demo page and components
│   ├── pitch/             # Pitch deck presentation
│   ├── why-us/            # Competitive advantages
│   ├── roadmap/           # Development roadmap
│   └── signup/            # User registration
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI elements
│   ├── layout/           # Layout components
│   ├── demo/             # Demo-specific components
│   ├── 3d/               # Three.js components
│   └── mobile/           # Mobile simulation
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   ├── animations.ts     # GSAP configurations
│   ├── 3d-assets.ts      # 3D model definitions
│   └── demo-data.ts      # Sample warranty data
├── styles/               # CSS modules and themes
│   ├── components/       # Component-specific styles
│   ├── animations/       # Animation definitions
│   └── themes/           # Color schemes and variants
└── types/                # TypeScript type definitions
    ├── warranty.ts       # Warranty-related types
    ├── assets.ts         # 3D asset types
    └── demo.ts           # Demo simulation types
```

## 🎨 Design System

### Color Palette (Futuristic AI Theme)
```css
:root {
  /* Primary Colors */
  --ai-blue: #00d4ff;
  --ai-purple: #8b5cf6;
  --ai-cyan: #06ffa5;
  
  /* Dark Theme */
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #2a2a2a;
  
  /* Text Colors */
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --text-accent: #00d4ff;
  
  /* Gradients */
  --gradient-ai: linear-gradient(135deg, #00d4ff, #8b5cf6);
  --gradient-glow: linear-gradient(90deg, #06ffa5, #00d4ff);
}
```

### Typography
- **Headings**: Inter, system-ui fallback
- **Body**: Inter, sans-serif
- **Code**: JetBrains Mono, monospace
- **Sizes**: Responsive scale from 14px to 72px

### Component Patterns
- **Cards**: Glassmorphism with subtle borders
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Floating labels with validation states
- **Navigation**: Sticky header with scroll effects

## 🚀 Development Workflow

### Setup Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build production
npm run build

# Start production server
npm start
```

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended + custom rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality

### Component Development
1. **Create component** in appropriate directory
2. **Add TypeScript types** for props and state
3. **Implement CSS module** for styling
4. **Add animations** using GSAP or Framer Motion
5. **Test responsiveness** on mobile and desktop

## 📱 Mobile-First Development

### Responsive Breakpoints
```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Mobile Simulation Window
- **iOS Viewport**: 375x812 (iPhone 13)
- **Android Viewport**: 360x800 (Pixel 5)
- **Responsive Design**: Fluid between breakpoints
- **Touch Interactions**: Optimized for finger navigation

## 🎮 3D/VR Implementation

### Three.js Setup
```typescript
// Basic scene configuration
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// Asset loading
const loader = new THREE.GLTFLoader();
const textureLoader = new THREE.TextureLoader();
```

### Asset Categories
1. **Electronics**: iPhone, Android, TV, Laptop
2. **Appliances**: Refrigerator, AC Unit, Washing Machine
3. **Vehicles**: Tesla Model 3, Generic Car, Motorcycle
4. **Furniture**: Sofa, Table, Chair, Bed
5. **Tools**: Drill, Saw, Toolbox, Equipment

### Performance Optimization
- **LOD (Level of Detail)**: Multiple quality levels
- **Texture Compression**: WebP and AVIF formats
- **Geometry Optimization**: Reduced polygon counts
- **Frustum Culling**: Only render visible objects

## 🔄 Animation System

### GSAP ScrollTrigger
```typescript
// Parallax background layers
gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-bg", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-container",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

### Effect Categories
- **Parallax Scrolling**: Multi-layer background movement
- **Hover Effects**: 3D tilt and glow animations
- **Loading States**: Skeleton screens and spinners
- **Transitions**: Page and component animations
- **Micro-interactions**: Button clicks and form feedback

## 📊 Demo Data Structure

### Warranty Item Schema
```typescript
interface WarrantyItem {
  id: string;
  name: string;
  brand: string;
  category: 'electronics' | 'appliances' | 'vehicles' | 'furniture';
  purchaseDate: Date;
  warrantyExpiry: Date;
  serialNumber: string;
  receiptImage?: string;
  qrCode: string;
  model3D?: string;
  location: {
    room: string;
    position: [number, number, number];
  };
  status: 'active' | 'expiring' | 'expired' | 'claimed';
  claimHistory: ClaimRecord[];
}
```

### Sample Data Categories
- **Electronics**: 15+ items with real specifications
- **Home Appliances**: 10+ common household items
- **Vehicles**: 5+ car models with service schedules
- **Furniture**: 8+ pieces with warranty information

## 🧪 Testing Strategy

### Unit Testing
- **Components**: React Testing Library
- **Utilities**: Jest for pure functions
- **3D Components**: Mock Three.js dependencies
- **Animations**: Test GSAP timeline creation

### Integration Testing
- **Page Rendering**: Full page component tests
- **User Interactions**: Click, scroll, and form submissions
- **API Simulation**: Mock warranty data responses
- **Mobile Responsiveness**: Viewport testing

### Performance Testing
- **Core Web Vitals**: LCP, FID, CLS monitoring
- **3D Performance**: Frame rate and memory usage
- **Bundle Size**: Webpack analyzer reports
- **Loading Times**: Network throttling tests

---

*Development documentation updated with each major feature release*
