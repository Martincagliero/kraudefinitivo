# Krautermeister - Premium Argentine Herbal Liqueur Landing Page

A modern, mobile-first landing page for Krautermeister, built with Next.js 16, React, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

This is a premium, cinematic landing page designed to showcase Krautermeister - an Argentine herbal liqueur brand. The design is minimalist, elegant, and fully optimized for mobile devices.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library for smooth interactions
- **TypeScript** - Type safety
- **React Intersection Observer** - Scroll-based animations

## 📱 Key Features

### Mobile-First Design
- Fully responsive layout starting from mobile
- Touch-friendly buttons (min 44x44px on mobile)
- Optimized video loading for mobile networks
- Safe area support for notched devices

### Performance
- Image lazy loading with Next.js Image component
- Video optimization with poster images
- Minimal animations on mobile to preserve performance
- Lighthouse mobile performance optimized

### Sections

1. **Header** - Sticky navigation with smooth scroll
2. **Hero** - Full viewport video background with title
3. **About (Historia)** - Editorial brand story
4. **Editorial Images** - Full-width image sections with overlay text
5. **Botanicals** - Responsive grid showcase (2/3/6 columns)
6. **Bottle Showcase** - Centered bottle video with caption
7. **Brand Differentiation** - Short message
8. **Contact** - CTA buttons for Instagram/WhatsApp
9. **Logo Watermark** - Subtle background branding

## 🎨 Design System

### Colors
- **Primary Dark**: `#1a2e1f` (Deep dark green)
- **Accent**: `#d4855a` (Herbal orange)
- **Text**: `#f5f3f0` (Warm white)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing & Breakpoints
- Mobile-first with responsive utilities
- Safe area padding for notched devices
- Tailwind breakpoints: sm (640px), md (768px), lg (1024px)

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # Historia section
│   ├── EditorialImages.tsx # Editorial image sections
│   ├── BotanicosSection.tsx # Botanical grid
│   ├── BottleShowcase.tsx   # Bottle showcase
│   ├── Differentiation.tsx  # Brand differentiation
│   ├── Contact.tsx         # Contact section
│   └── LogoWatermark.tsx   # Logo watermark
public/
├── logo.png                # Brand logo (placeholder)
├── title.png               # Hero title image (placeholder)
├── hero-video.mp4          # Hero background video (placeholder)
├── bottle-video.mp4        # Bottle showcase video (placeholder)
├── editorial-1.jpg to 4.jpg # Editorial images (placeholders)
├── botanico-1.jpg to 6.jpg  # Botanical images (placeholders)
└── favicon.png             # Favicon
```

## 🛠 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add media assets**:
   Replace placeholder images and videos in the `public/` folder:
   - `/logo.png` - Brand logo
   - `/title.png` - Hero title image
   - `/hero-video.mp4` - Hero background video
   - `/bottle-video.mp4` - Bottle showcase video
   - `/editorial-1.jpg` to `/editorial-4.jpg` - Editorial images
   - `/botanico-1.jpg` to `/botanico-6.jpg` - Botanical images

3. **Update contact links**:
   In `src/components/Contact.tsx`, update:
   - Instagram URL: `https://instagram.com/krautermeister`
   - WhatsApp URL: `https://wa.me/542945123456`

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔨 Building for Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## 📊 Performance Optimization Tips

- **Images**: Use WebP format for better compression
- **Videos**: Keep video files under 5MB for mobile
- **Fonts**: Google Fonts (Playfair Display + Inter) are already optimized
- **Animations**: Framer Motion is tree-shaked to minimize bundle

## 🎬 Animation Features

- **Fade-up on scroll** - Sections animate in smoothly
- **Hover effects** - Buttons and cards scale on hover
- **Smooth scrolling** - Scroll-to-anchor behavior
- **Staggered animations** - Children animate sequentially

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Supports notched devices with safe area

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast for readability

## 📝 Notes

### Image Placeholders
All image paths in components point to files in the `public/` folder. These are placeholders that should be replaced with actual assets:

```
public/
├── logo.png                # Replace with actual logo
├── title.png               # Replace with hero title
├── hero-video.mp4          # Replace with hero video
├── bottle-video.mp4        # Replace with bottle video
├── editorial-1.jpg         # Replace with editorial photo
└── botanico-1.jpg          # Replace with botanical photo
```

### Video Optimization
- Use H.264 codec for MP4 files
- Include poster images to show preview before play
- Keep file sizes small for mobile (under 5MB each)
- Use `playsInline` for iOS devices

### Mobile Considerations
- Button minimum touch target: 44x44px
- Viewport fit cover for notched devices
- Lazy loading on images below fold
- Reduced motion on small screens (can be added)

## 🤝 Customization

All content, colors, and assets can be easily customized:

1. **Colors**: Edit `tailwind.config.ts`
2. **Text**: Edit component files in `src/components/`
3. **Fonts**: Modify font imports in `src/app/layout.tsx`
4. **Spacing**: Adjust Tailwind utilities in components

## 📞 Contact Links

Update the following in `Contact.tsx`:
- Replace placeholder phone number with actual WhatsApp
- Replace placeholder Instagram handle

## ✅ Lighthouse Recommendations

- ✓ Mobile First Layout
- ✓ Optimized Images
- ✓ Lazy Loading
- ✓ Performance Optimized
- ✓ Accessibility Compliant

## 📄 License

All rights reserved. This is a custom project for Krautermeister.

---

**Ready to showcase your brand to the world!** 🍃
