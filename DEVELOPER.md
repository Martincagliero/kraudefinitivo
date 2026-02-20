# Krautermeister - Developer Reference

## Quick Commands

```bash
# Dev server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## Component Structure

### Page Hierarchy
```
page.tsx (main page)
├── Header (sticky, navigation)
├── Hero (full viewport, video background)
├── About (Historia section)
├── EditorialImages (4 full-width image sections)
├── BotanicosSection (6-column botanical grid)
├── BottleShowcase (centered bottle video)
├── Differentiation (brief message)
└── Contact (CTA buttons + footer)
└── LogoWatermark (subtle background)
```

## Key Files to Edit

| Need | File | Location |
|------|------|----------|
| Change logo | Header.tsx | L20-26 |
| Edit brand story | About.tsx | L35-52 |
| Update contact links | Contact.tsx | L73, 90 |
| Add/modify botanical items | BotanicosSection.tsx | L75-82 |
| Change colors | globals.css | L6-9 |

## Tailwind CSS Utilities

Common classes used in this project:

```
Spacing:
- px-4 sm:px-6 lg:px-8 (responsive padding)
- mb-8 sm:mb-10 md:mb-12 (responsive margins)

Text:
- text-base sm:text-lg md:text-xl (responsive font sizes)
- font-serif, font-sans (font families)
- text-kraut-white (custom color)

Layout:
- w-full max-w-3xl mx-auto (centered max-width container)
- grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 (responsive grid)

Display:
- hidden md:flex (hide on mobile, show on tablet+)
- flex flex-col sm:flex-row (stack on mobile, row on tablet+)

Effects:
- rounded-lg (border radius)
- transition-all duration-300 (smooth transitions)
```

## Framer Motion Hooks

All animations use Framer Motion:

### useInView Hook
```typescript
import { useInView } from "react-intersection-observer";

const { ref, inView } = useInView({
  threshold: 0.1,      // Trigger at 10% visibility
  triggerOnce: true,   // Animate only once
});
```

### Motion Components
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}    // Start state
  animate={{ opacity: 1, y: 0 }}     // End state
  transition={{ duration: 0.8 }}     // Duration
>
  Content
</motion.div>
```

## Asset Paths

All assets are in the `public/` folder:

```
Video backgrounds:
- /hero-video.mp4
- /bottle-video.mp4

Images:
- /logo.png
- /title.png
- /editorial-1.jpg to 4.jpg
- /botanico-1.jpg to 6.jpg
- /favicon.png

Note: Use /filename.ext in Image/video components
```

## Mobile Breakpoints

```
- Phones: < 640px (sm)
- Tablets: 640px - 1024px (md, lg)
- Desktop: > 1024px (xl)
```

Example responsive classes:
```
hidden md:flex       // Hide on mobile, show on tablet+
w-full sm:w-1/2     // Full width on mobile, half on tablet+
text-xl sm:text-2xl // Small text on mobile, larger on tablet+
```

## Custom Colors

Defined in `globals.css`:
```css
--color-kraut-dark: #1a2e1f     /* Deep green background */
--color-kraut-orange: #d4855a   /* Accent/hover color */
--color-kraut-white: #f5f3f0    /* Main text color */
```

Use in JSX:
```typescript
className="hover:bg-kraut-orange"
style={{ borderColor: 'var(--color-kraut-orange)' }}
```

## Common Edits

### Add new editorial image
1. Add image to `public/editorial-5.jpg`
2. Edit `EditorialImages.tsx`:
```typescript
const editorials = [
  // ... existing items
  {
    text: "Your new text here",
    image: "/editorial-5.jpg",
  },
];
```

### Add new botanical item
1. Add image to `public/botanico-7.jpg`
2. Edit `BotanicosSection.tsx`:
```typescript
const botanicos = [
  // ... existing items
  { name: "New Botanical Name", image: "/botanico-7.jpg" },
];
```

### Change section ID for scroll
1. Add `id="my-section"` to any section
2. Update Header.tsx:
```typescript
const navItems = [
  // ... existing
  { label: "My Section", id: "my-section" },
];
```

## Performance Tips

1. **Lazy load images** - Next.js Image component does this automatically
2. **Optimize videos** - Keep under 5MB, use H.264 codec
3. **Minimize animations** - On mobile, reduce motion intensity
4. **Cache assets** - Vercel handles this automatically

## Testing

### Mobile Testing
- Use DevTools (F12) → Toggle device toolbar
- Test on real devices when possible
- Check touch interactions (buttons, links)

### Performance Testing
- Open DevTools → Lighthouse
- Target: Performance 90+, Accessibility 95+
- Check Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

## Debugging

### Common Issues

**Layout shifts (CLS problems)**
- Solution: Use `width` and `height` props on images
- Or use `aspect-ratio` classes

**Slow animations**
- Solution: Reduce `duration` in Framer Motion
- Or use `will-change: transform` in CSS

**Videos not playing**
- Solution: Ensure `playsInline`, `muted`, `loop` are set
- Check video codec (H.264 for MP4)

**Images not loading**
- Solution: Check file path (case-sensitive on Linux)
- Verify file extension (.jpg, not .jpeg)
- Use `priority` on above-fold images

## Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## File Size Targets

- Hero video: < 5MB
- Bottle video: < 5MB
- Editorial images: 100-300KB each
- Total bundle: < 500KB (without videos)

---

Happy coding! 🍃
