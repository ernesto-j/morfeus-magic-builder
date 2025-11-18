# Morfeus Design System Guide - Light Theme

> **Version:** 1.0.0 | **Last Updated:** January 2025
>
> **Note:** This is the light theme variant. For the dark theme, see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
> 
> To implement theme switching, use CSS custom properties and a theme provider that swaps variable values based on user preference.

## Table of Contents
1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Animations](#animations)
6. [Brand Guidelines](#brand-guidelines)
7. [Design Patterns](#design-patterns)
8. [Best Practices](#best-practices)
9. [Accessibility](#accessibility)
10. [File Organization](#file-organization)
11. [Quick Reference](#quick-reference)

---

## Color System

### Core Palette (HSL Format)

All colors are defined using HSL format in CSS variables for consistency and easy theme switching.

```css
/* Light Theme - Core Colors */
:root {
  /* Base Colors */
  --background: 0 0% 98%;           /* Light background */
  --foreground: 0 0% 7%;            /* Dark text */
  
  /* Card Colors */
  --card: 0 0% 100%;                /* White cards */
  --card-foreground: 0 0% 7%;       /* Dark card text */
  
  /* Brand Colors */
  --primary: 142 76% 64%;           /* Green - Technology */
  --primary-foreground: 0 0% 100%;  /* White text on primary */
  
  --accent: 328 86% 55%;            /* Pink - AI/Agents (darker for readability) */
  --accent-foreground: 0 0% 100%;   /* White text on accent */
  
  --secondary: 24 95% 52%;          /* Orange - Human Touch (darker for readability) */
  --secondary-foreground: 0 0% 100%; /* White text on secondary */
  
  /* Utility Colors */
  --muted: 0 0% 95%;                /* Light gray background */
  --muted-foreground: 0 0% 40%;     /* Darker muted text */
  
  --destructive: 0 84% 60%;         /* Red - Errors/Warnings */
  --destructive-foreground: 0 0% 100%;
  
  --border: 0 0% 85%;               /* Subtle light borders */
  --input: 0 0% 96%;                /* Light input backgrounds */
  --ring: 142 76% 64%;              /* Focus ring (primary) */
  
  /* Popover & Dialog */
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 7%;
}
```

### Brand Color Meanings

- **Primary (Green)**: Technology, Data, Platform concepts
- **Accent (Pink)**: AI, Agents, Automation
- **Secondary (Orange)**: Human touchpoints, Approvals, Strategy

### Color Usage Guidelines

**✅ CORRECT:**
```tsx
// Use semantic tokens
<div className="bg-primary text-primary-foreground">
<div className="border-accent/20 bg-accent/5">
<p className="text-muted-foreground">
```

**❌ WRONG:**
```tsx
// Don't use hardcoded Tailwind colors
<div className="bg-green-500 text-white">
<div className="border-pink-200 bg-pink-50">
<p className="text-gray-500">
```

### Gradients

```css
/* Hero gradient - vibrant for light backgrounds */
--gradient-hero: linear-gradient(135deg, hsl(328 86% 60%), hsl(287 77% 70%));

/* Card gradient - subtle light */
--gradient-card: linear-gradient(135deg, hsl(0 0% 98% / 0.5), hsl(0 0% 100% / 0.5));

/* Primary gradient */
--gradient-primary: linear-gradient(135deg, hsl(142 76% 64%), hsl(142 76% 54%));

/* Accent gradient */
--gradient-accent: linear-gradient(135deg, hsl(328 86% 55%), hsl(328 86% 65%));
```

**Usage:**
```tsx
<div className="bg-gradient-to-r from-primary to-primary/80">
<div className="bg-[var(--gradient-hero)]">
```

### Glow Effects

Softer glow effects for light theme:

```css
/* Glow variables */
--glow-primary: 0 0 20px hsl(142 76% 64% / 0.15);
--glow-accent: 0 0 20px hsl(328 86% 55% / 0.15);
--glow-secondary: 0 0 20px hsl(24 95% 52% / 0.15);
```

**Utility Classes:**
```tsx
<div className="shadow-[var(--glow-primary)]">
<div className="shadow-[var(--glow-accent)]">
```

### Shadow System

Light themes use shadows for depth and hierarchy:

```css
/* Shadow variables */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

**Tailwind Classes:**
```tsx
<Card className="shadow-md hover:shadow-lg">
<div className="shadow-sm">
<div className="shadow-xl">
```

---

## Typography

### Font Hierarchy

**Headings:**
- H1: `text-4xl md:text-5xl lg:text-6xl font-bold`
- H2: `text-3xl md:text-4xl lg:text-5xl font-bold`
- H3: `text-2xl md:text-3xl font-semibold`
- H4: `text-xl md:text-2xl font-semibold`

**Body Text:**
- Large: `text-lg md:text-xl text-muted-foreground`
- Regular: `text-base text-foreground`
- Small: `text-sm text-muted-foreground`

**Usage:**
```tsx
<h1 className="text-4xl md:text-5xl font-bold text-foreground">
<h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
<p className="text-lg text-muted-foreground">
```

### Text Utilities

```tsx
// Gradient text
className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"

// Responsive sizing
className="text-base md:text-lg lg:text-xl"

// Color variations
className="text-foreground"        // Primary text
className="text-muted-foreground"  // Secondary text
className="text-primary"           // Brand green
className="text-accent"            // Brand pink
```

---

## Spacing & Layout

### Container Pattern

```tsx
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="space-y-12">
      {/* Content */}
    </div>
  </div>
</section>
```

**Standard spacing:**
- Section padding: `py-20 px-6`
- Container max-width: `max-w-6xl mx-auto`
- Content spacing: `space-y-12` or `space-y-8`

### Grid Layouts

**2-Column:**
```tsx
<div className="grid md:grid-cols-2 gap-8">
```

**3-Column:**
```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

**4-Column:**
```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

### Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Components

### Buttons

**Variants:**

```tsx
// Default (Primary)
<Button variant="default">
  className="bg-primary text-primary-foreground hover:bg-primary/90"
</Button>

// Hero (Gradient)
<Button variant="hero">
  className="bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg"
</Button>

// Secondary
<Button variant="secondary">
  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
</Button>

// Outline
<Button variant="outline">
  className="border-border bg-white hover:bg-muted"
</Button>

// Ghost
<Button variant="ghost">
  className="hover:bg-muted hover:text-foreground"
</Button>

// Destructive
<Button variant="destructive">
  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
</Button>
```

**Sizes:**
- `size="sm"`: Small buttons
- `size="default"`: Standard buttons
- `size="lg"`: Large buttons
- `size="icon"`: Icon-only buttons

### Cards

**Basic Card:**
```tsx
<Card className="border-border bg-white shadow-md hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Feature Card Pattern:**
```tsx
<Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 shadow-sm transition-all">
  <CardHeader>
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <CardTitle className="text-xl">Feature Name</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">Description...</p>
  </CardContent>
</Card>
```

**Stat Card Pattern:**
```tsx
<Card className="border-accent/20 bg-accent/5 shadow-md">
  <CardContent className="pt-6">
    <div className="text-4xl font-bold text-accent mb-2">
      <AnimatedStat value="3x" />
    </div>
    <p className="text-muted-foreground">Faster delivery</p>
  </CardContent>
</Card>
```

### Badges

**Variants:**
```tsx
<Badge variant="default">     // bg-primary
<Badge variant="secondary">   // bg-secondary
<Badge variant="outline">     // border-border bg-white
<Badge variant="destructive"> // bg-destructive
```

---

## Animations

### Framer Motion Patterns

**Scroll Reveal:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

**Staggered Children:**
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
```

**Hover Effects:**
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
```

### Tailwind Animations

```tsx
className="animate-fade-in"      // Fade in on mount
className="animate-glow-pulse"   // Pulsing glow effect
className="hover:scale-105 transition-transform duration-200"
```

### AnimatedStat Component

```tsx
import AnimatedStat from "@/components/shared/AnimatedStat";

<AnimatedStat value="3x" />
<AnimatedStat value="60%" />
<AnimatedStat value="100" />
```

---

## Brand Guidelines

### Color Meanings

- **Primary (Green)**: Represents technology, data infrastructure, and platform capabilities
- **Accent (Pink)**: Represents AI, agents, and automation
- **Secondary (Orange)**: Represents human touch, strategy, and approval stages

### Logo Usage

- Always use on light backgrounds
- Minimum size: 120px width
- Clear space: Minimum 20px on all sides
- Never distort or rotate

### Voice & Tone

- **Professional** but approachable
- **Technical** but accessible
- **Confident** but not arrogant
- **Innovative** but practical

---

## Design Patterns

### Section Pattern

```tsx
<section className="py-20 px-6 bg-background">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Section Title
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Section description text
      </p>
    </motion.div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Content cards */}
    </div>
  </div>
</section>
```

### Hero Pattern

```tsx
<section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
  {/* Animated background elements */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]" />
  
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
    >
      Hero Title
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
    >
      Hero description
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Button size="lg" variant="hero">Primary CTA</Button>
      <Button size="lg" variant="outline">Secondary CTA</Button>
    </motion.div>
    
    {/* Stats Row */}
    <StatsRow stats={[...]} className="mt-16" />
  </div>
</section>
```

### Framework Visualization Pattern

```tsx
<section className="py-20 px-6 bg-muted/30">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Framework Name
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Brief description of the framework
      </p>
    </div>
    
    <Card className="border-border bg-white shadow-lg p-8">
      {/* Framework visualization content */}
      <div className="space-y-6">
        {/* Interactive elements, diagrams, etc. */}
      </div>
    </Card>
  </div>
</section>
```

### Case Study / Testimonial Pattern

```tsx
<Card className="border-accent/20 bg-white shadow-md hover:shadow-lg transition-shadow relative">
  <ComingSoonOverlay /> {/* Optional overlay */}
  
  <CardHeader>
    <div className="flex items-start justify-between mb-4">
      <Badge variant="secondary">Industry</Badge>
      <div className="text-2xl font-bold text-accent">XXX%</div>
    </div>
    <CardTitle className="text-xl mb-2">Case Study Title</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  
  <CardContent>
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="text-3xl font-bold text-primary">$XXX</div>
        <p className="text-sm text-muted-foreground">Metric description</p>
      </div>
      
      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
        "Customer quote or testimonial"
      </blockquote>
      
      <div className="flex items-center gap-3 pt-4">
        <Avatar className="border-2 border-accent/20">
          <AvatarFallback>XX</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">Name</p>
          <p className="text-sm text-muted-foreground">Title, Company</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
```

### Navigation Pattern

```tsx
<header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur-sm shadow-sm">
  <div className="container flex h-16 items-center justify-between px-6">
    <Link to="/" className="flex items-center gap-2">
      <span className="text-2xl font-bold text-foreground">MORFEUS</span>
    </Link>
    
    <nav className="hidden md:flex items-center gap-6">
      <Link to="/" className="text-foreground hover:text-primary transition-colors">
        Home
      </Link>
      {/* More links */}
    </nav>
    
    <Button variant="hero">Request Assessment</Button>
  </div>
</header>
```

### Footer Pattern

```tsx
<footer className="bg-slate-50 border-t border-border text-foreground">
  <div className="max-w-6xl mx-auto px-6 py-12">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      {/* Footer columns */}
    </div>
    
    <div className="border-t border-border pt-8 text-center text-muted-foreground">
      <p>&copy; 2025 Morfeus. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## Best Practices

### DO ✅

- **Use semantic color tokens** from `index.css` (e.g., `bg-primary`, `text-muted-foreground`)
- **Use HSL colors** with CSS variables for consistency
- **Implement responsive design** with mobile-first approach
- **Add shadows** to cards and elevated elements for depth
- **Use Framer Motion** for scroll-triggered animations
- **Keep component sizes manageable** (< 300 lines)
- **Use the `AnimatedStat` component** for numeric displays
- **Test color contrast** for accessibility (WCAG AA)
- **Add hover states** to interactive elements with `shadow-lg` or `scale-105`

### DON'T ❌

- **Don't use hardcoded Tailwind colors** (e.g., `bg-green-500`, `text-blue-600`)
- **Don't use RGB colors** - always use HSL
- **Don't skip responsive breakpoints** - test on all screen sizes
- **Don't nest components too deeply** (max 3 levels)
- **Don't forget focus states** for keyboard navigation
- **Don't use pure black** (`#000`) - use `foreground` token
- **Don't over-animate** - keep transitions subtle and purposeful
- **Don't skip alt text** on images

---

## Accessibility

### Requirements

- **WCAG AA Compliance**: All text must have 4.5:1 contrast ratio (3:1 for large text)
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Focus States**: Visible focus indicators on all interactive elements
- **Screen Readers**: Semantic HTML and ARIA labels where needed
- **Motion**: Respect `prefers-reduced-motion` media query

### Implementation

```tsx
// Focus states
<Button className="focus:ring-2 focus:ring-ring focus:ring-offset-2">

// ARIA labels
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>

// Semantic HTML
<nav aria-label="Main navigation">
<main aria-label="Main content">

// Skip links
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### Color Contrast Testing

Test all color combinations:
- `text-foreground` on `bg-background`: ✅ High contrast
- `text-muted-foreground` on `bg-background`: ✅ 4.5:1+
- `text-primary-foreground` on `bg-primary`: ✅ WCAG AA
- `text-accent-foreground` on `bg-accent`: ✅ WCAG AA
- `text-secondary-foreground` on `bg-secondary`: ✅ WCAG AA

---

## File Organization

```
src/
├── components/
│   ├── shared/          # Reusable components (Navigation, Footer, AnimatedStat)
│   ├── ui/              # Shadcn UI components (Button, Card, Badge)
│   ├── home/            # Homepage-specific sections
│   ├── about/           # About page sections
│   ├── agentic/         # Agentic consulting page sections
│   ├── blueprints/      # Blueprints page sections
│   ├── data/            # Data page sections
│   └── frameworks/      # Visual framework components
├── pages/               # Route pages
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
├── index.css            # Global styles & CSS variables
└── tailwind.config.ts   # Tailwind configuration
```

---

## Quick Reference

### Essential Classes

```tsx
// Layout
"max-w-6xl mx-auto px-6 py-20"
"grid md:grid-cols-3 gap-8"
"flex items-center justify-between"

// Typography
"text-4xl md:text-5xl font-bold text-foreground"
"text-xl text-muted-foreground"

// Colors
"bg-primary text-primary-foreground"
"border-accent/20 bg-accent/5"
"text-muted-foreground"

// Effects
"shadow-md hover:shadow-lg transition-shadow"
"hover:scale-105 transition-transform"
"backdrop-blur-sm bg-white/90"

// Animations (Framer Motion)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

### Animation Configurations

```tsx
// Fade in
{ duration: 0.5 }

// Stagger
{ staggerChildren: 0.1, delayChildren: 0.2 }

// Hover
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.2 }}
```

---

## Theme Comparison Table

| Element | Dark Theme | Light Theme |
|---------|------------|-------------|
| Background | `0 0% 7%` | `0 0% 98%` |
| Foreground | `0 0% 98%` | `0 0% 7%` |
| Cards | `0 0% 10%` + backdrop-blur | `0 0% 100%` + shadow |
| Borders | `0 0% 20%` | `0 0% 85%` |
| Muted BG | `0 0% 20%` | `0 0% 95%` |
| Muted Text | `0 0% 60%` | `0 0% 40%` |
| Glow Opacity | `0.3` | `0.15` |
| Depth Strategy | Backdrop blur + borders | Shadows + elevation |

---

## Version History

- **v1.0.0** (January 2025): Initial light theme design system

---

**For questions or contributions, refer to the project documentation or contact the design team.**
