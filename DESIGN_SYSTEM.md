# Morfeus Design System Guide

## Table of Contents
1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Animations](#animations)
6. [Brand Guidelines](#brand-guidelines)
7. [Design Patterns](#design-patterns)

---

## Color System

### Primary Colors (HSL Format)

All colors MUST be defined in HSL format and use CSS variables from `index.css`. **Never use hardcoded Tailwind colors** like `text-blue-600` or `bg-red-500`.

#### Core Palette

```css
--background: 0 0% 7%;           /* Dark background */
--foreground: 0 0% 98%;          /* Light text */
--card: 0 0% 10%;                /* Card background */
--card-foreground: 0 0% 98%;     /* Card text */
```

#### Brand Colors

```css
--primary: 142 76% 64%;          /* Green/Teal - Data, main actions, positive */
--primary-foreground: 0 0% 7%;   /* Text on primary */

--accent: 328 86% 64%;           /* Pink/Magenta - AI/Agent concepts */
--accent-foreground: 0 0% 98%;   /* Text on accent */

--secondary: 24 95% 62%;         /* Orange - Human touchpoints, approvals */
--secondary-foreground: 0 0% 7%; /* Text on secondary */

--muted: 0 0% 20%;               /* Neutral backgrounds */
--muted-foreground: 0 0% 60%;    /* Muted text */

--destructive: 0 84% 60%;        /* Red - Errors, warnings */
--destructive-foreground: 0 0% 98%;

--border: 0 0% 20%;              /* Border color */
--input: 0 0% 15%;               /* Input backgrounds */
--ring: 142 76% 64%;             /* Focus rings */
```

#### Usage Guidelines

| Color | Use For | Examples |
|-------|---------|----------|
| **Primary (Green)** | Data concepts, main CTAs, success states, data-related features | Morfeus Data, database icons, "Learn More" buttons |
| **Accent (Pink)** | AI/Agent concepts, secondary emphasis, innovation features | Agent cards, AI features, secondary CTAs |
| **Secondary (Orange)** | Human touchpoints, approval steps, warmth | 10% human setup, approval stages, human review |
| **Muted** | Neutral categories, background states, disabled states | Coming soon badges, disabled buttons |
| **Destructive** | Errors, critical warnings, ClickOps stage | Error messages, critical findings |

### Color Application

#### ✅ CORRECT Usage
```tsx
// Use semantic tokens
<div className="bg-primary text-primary-foreground">
<div className="border-accent/50 bg-accent/10">
<Button variant="default"> // Uses primary color
<Badge className="bg-secondary/20 text-secondary">
```

#### ❌ INCORRECT Usage
```tsx
// Never use hardcoded Tailwind colors
<div className="bg-blue-600 text-white">
<div className="border-green-500/50 bg-green-100">
<p className="text-purple-400">
```

### Gradients

```css
--gradient-hero: linear-gradient(135deg, hsl(328 86% 64%), hsl(287 77% 64%));
--gradient-card: linear-gradient(135deg, hsl(0 0% 10% / 0.5), hsl(0 0% 15% / 0.5));
```

**Usage:**
```tsx
<div className="bg-gradient-to-r from-accent to-purple-500">
<Button variant="hero"> // Uses gradient-hero
```

### Glow Effects

```css
--glow-primary: 0 0 40px hsl(142 76% 64% / 0.3);
--glow-accent: 0 0 40px hsl(328 86% 64% / 0.3);
```

**Utility Classes:**
```tsx
<h1 className="glow-primary">Glowing Primary Text</h1>
<div className="glow-accent">Glowing Accent Box</div>
```

---

## Typography

### Font Family
- Default: System font stack with antialiasing
- Headings: Bold, tight tracking

### Hierarchy

```tsx
<h1 className="text-5xl md:text-6xl font-bold tracking-tight">
  Main Hero Title
</h1>

<h2 className="text-4xl md:text-5xl font-bold">
  Section Title
</h2>

<h3 className="text-2xl md:text-3xl font-bold">
  Subsection Title
</h3>

<h4 className="text-xl font-semibold">
  Card Title
</h4>

<p className="text-lg text-muted-foreground">
  Body text / Descriptions
</p>

<p className="text-sm text-muted-foreground">
  Small text / Captions
</p>
```

### Text Utilities

```tsx
// Gradient text effect
<span className="text-gradient">AI-Powered</span>

// Muted foreground
<p className="text-muted-foreground">Supporting text</p>

// Responsive sizing
<h1 className="text-4xl md:text-5xl lg:text-6xl">
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

### Standard Spacing

| Use Case | Class | Value |
|----------|-------|-------|
| Section padding vertical | `py-20` | 5rem |
| Section padding horizontal | `px-6` | 1.5rem |
| Container max width | `max-w-6xl` | 72rem |
| Content spacing | `space-y-12` | 3rem |
| Grid gaps | `gap-6` | 1.5rem |
| Card padding | `p-6` | 1.5rem |

### Grid Layouts

```tsx
// 3-column responsive grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>

// 2-column responsive grid
<div className="grid md:grid-cols-2 gap-8">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Responsive Breakpoints
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

---

## Components

### Button Variants

```tsx
// Primary action (green)
<Button variant="default">Learn More</Button>

// Hero gradient button
<Button variant="hero">Get Started</Button>

// Secondary action (orange background)
<Button variant="secondary">Contact Us</Button>

// Outline button
<Button variant="outline">Learn More</Button>

// Ghost button
<Button variant="ghost">Cancel</Button>

// Destructive button
<Button variant="destructive">Delete</Button>
```

### Button Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

### Card Pattern
```tsx
<Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
  <CardHeader>
    <CardTitle className="text-2xl">Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Badge Variants
```tsx
<Badge variant="default">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
```

### Common Card Patterns

#### Feature Card
```tsx
<Card className="p-6 border-accent/20 bg-accent/5 hover:bg-accent/10 transition-all">
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-lg bg-accent/10">
      <Icon className="w-6 h-6 text-accent" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">Feature Title</h3>
      <p className="text-muted-foreground">Description</p>
    </div>
  </div>
</Card>
```

#### Stat Card
```tsx
<Card className="p-6 text-center border-primary/20">
  <div className="text-4xl font-bold text-primary mb-2">
    <AnimatedStat stat="3x" />
  </div>
  <p className="text-muted-foreground">Faster Delivery</p>
</Card>
```

---

## Animations

### Framer Motion Patterns

#### Scroll Reveal (Standard)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

#### Staggered Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {/* Item */}
    </motion.div>
  ))}
</motion.div>
```

#### Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
  {/* Hoverable content */}
</motion.div>
```

### Tailwind Animations

```tsx
// Fade in
<div className="animate-fade-in">

// Glow pulse
<div className="animate-glow-pulse">

// Accordion animations (auto-applied by Radix)
<Accordion> // Uses accordion-down/up
```

### Animated Stats

```tsx
import { AnimatedStat } from "@/components/shared/AnimatedStat";

<AnimatedStat stat="3x" suffix=" Faster" />
<AnimatedStat stat="60%" suffix=" Cost Savings" />
<AnimatedStat stat="$1.9M" prefix="$" />
```

---

## Brand Guidelines

### Brand Color Meanings

#### Primary (Green/Teal) - Data & Technology
- Represents data, technology, and infrastructure
- Use for Morfeus Data features
- Main call-to-action buttons
- Success states and positive outcomes

#### Accent (Pink/Magenta) - AI & Innovation
- Represents AI agents, automation, and innovation
- Use for agentic features
- AI-related content
- Secondary emphasis

#### Secondary (Orange) - Human Touch
- Represents human involvement, warmth
- Use for 10% human setup/approval stages
- Human review steps
- Consultative services

### Logo Usage
- Primary logo location: Navigation bar (top left)
- Logo should always link to homepage
- Maintain clear space around logo

### Voice & Tone
- Professional yet approachable
- Data-driven and technical
- Emphasize automation and efficiency
- Highlight human-AI collaboration (10-80-10)

---

## Design Patterns

### Section Structure Pattern
```tsx
<section className="py-20 px-6 relative overflow-hidden">
  {/* Optional animated background */}
  <div className="absolute inset-0 -z-10">
    <AnimatedBackground />
  </div>
  
  <div className="max-w-6xl mx-auto">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Section Title
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Section description
      </p>
    </motion.div>

    {/* Content grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <Card key={item.id} />
      ))}
    </div>
  </div>
</section>
```

### Hero Section Pattern
```tsx
<section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
  <div className="absolute inset-0 -z-10">
    <AnimatedBackground />
  </div>
  
  <div className="max-w-4xl mx-auto text-center space-y-8">
    <Badge>Category Label</Badge>
    
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
      Hero Title
    </h1>
    
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
      Hero description
    </p>
    
    <div className="flex flex-wrap gap-4 justify-center">
      <Button variant="hero" size="lg">Primary CTA</Button>
      <Button variant="outline" size="lg">Secondary CTA</Button>
    </div>
    
    <StatsRow stats={[...]} />
  </div>
</section>
```

### Framework Component Pattern
```tsx
// All visual frameworks should follow this structure
export const FrameworkName = ({ variant = "default" }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Framework Title</h2>
            <p className="text-muted-foreground">Framework description</p>
          </div>
          
          {/* Visual framework content */}
          <div className="border border-primary/20 rounded-lg p-6 bg-card/50">
            {/* Framework visualization */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
```

### Case Study / Testimonial Pattern
```tsx
<Card className="p-6 border-primary/20 relative">
  {/* Optional Coming Soon overlay */}
  <ComingSoonOverlay />
  
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Badge variant="secondary">Industry</Badge>
      <span className="text-sm text-muted-foreground">Timeline</span>
    </div>
    
    <h3 className="text-2xl font-bold">Case Study Title</h3>
    
    <div className="grid grid-cols-3 gap-4">
      {results.map(result => (
        <div key={result.label}>
          <div className="text-2xl font-bold text-primary">
            {result.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {result.label}
          </div>
        </div>
      ))}
    </div>
    
    <blockquote className="border-l-2 border-accent pl-4 italic">
      "Quote text"
      <footer className="text-sm text-muted-foreground mt-2">
        — Attribution
      </footer>
    </blockquote>
  </div>
</Card>
```

### Navigation Pattern
```tsx
<nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
      </Link>
      
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        {/* More links */}
      </div>
      
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          {/* Mobile nav content */}
        </SheetContent>
      </Sheet>
      
      <Button variant="hero">Request Assessment</Button>
    </div>
  </div>
</nav>
```

### Footer Pattern
```tsx
<footer className="border-t border-border bg-card">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      {columns.map(column => (
        <div key={column.title}>
          <h3 className="font-bold mb-4">{column.title}</h3>
          <ul className="space-y-2">
            {column.links.map(link => (
              <li key={link.label}>
                <Link 
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    
    <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Morfeus. All rights reserved.
    </div>
  </div>
</footer>
```

---

## Best Practices

### DO ✅
- Always use semantic color tokens (`text-primary`, `bg-accent/10`)
- Use HSL color format for all custom colors
- Follow responsive design patterns (`md:`, `lg:`)
- Implement scroll animations with `whileInView`
- Use `motion.div` for animated sections
- Keep components focused and reusable
- Use `max-w-6xl` for content containers
- Apply `py-20 px-6` for section padding
- Use `space-y-12` for vertical content spacing
- Implement hover states on interactive elements

### DON'T ❌
- Never use hardcoded Tailwind colors (`text-blue-600`, `bg-red-500`)
- Don't use RGB color format
- Don't create monolithic components
- Don't skip responsive design
- Don't forget accessibility (WCAG AA)
- Don't use inline styles
- Don't ignore semantic HTML
- Don't forget focus states for keyboard navigation

---

## Accessibility

### Focus States
All interactive elements must have visible focus states:
```tsx
<Button className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
```

### Semantic HTML
```tsx
// Use semantic elements
<nav>, <header>, <main>, <section>, <article>, <aside>, <footer>

// Proper heading hierarchy
<h1> → <h2> → <h3> (no skipping levels)
```

### ARIA Labels
```tsx
<Button aria-label="Open menu">
  <Menu />
</Button>

<Link to="/about" aria-current="page">About</Link>
```

### Color Contrast
- Ensure WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
- Test all color combinations
- Never rely on color alone to convey information

---

## File Organization

```
src/
├── components/
│   ├── ui/              # Shadcn components (Button, Card, etc.)
│   ├── shared/          # Reusable components (Navigation, Footer, etc.)
│   ├── home/            # Homepage-specific components
│   ├── data/            # Data page components
│   ├── agentic/         # Agentic consulting page components
│   ├── blueprints/      # Blueprints page components
│   ├── frameworks/      # Visual framework components
│   └── about/           # About page components
├── pages/               # Page components
├── hooks/               # Custom hooks
├── lib/                 # Utilities
└── index.css            # Design system tokens (DO NOT MODIFY without approval)
```

---

## Quick Reference

### Essential Classes Cheat Sheet

```tsx
// Section wrapper
className="py-20 px-6"

// Content container
className="max-w-6xl mx-auto"

// Section title
className="text-4xl md:text-5xl font-bold text-center mb-12"

// Card with brand colors
className="p-6 border-primary/20 bg-card/50 hover:border-primary/50 transition-all"

// Responsive grid
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"

// Muted text
className="text-muted-foreground"

// Animated reveal
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

---

**Last Updated:** 2025-11-18  
**Version:** 1.0.0
