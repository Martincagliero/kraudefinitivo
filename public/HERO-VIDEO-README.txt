PLACEHOLDER: Hero Background Video
File: public/hero-video.mp4

This file should contain a cinematic video background for the hero section.

Requirements:
- Format: MP4 (H.264 codec)
- Duration: 3-5 seconds loop
- Resolution: 1920x1080 (minimum), preferably 4K
- File size: Under 5MB (optimize for mobile)
- Content: Atmospheric, nature-focused imagery with herbs, botanical elements, or the Argentine landscape
- Aspect ratio: 16:9
- Audio: None (muted autoplay)

Optimization tips:
- Use FFmpeg to compress: ffmpeg -i input.mp4 -vcodec libx264 -crf 28 hero-video.mp4
- Consider creating a mobile version (720p) as well
- Add a poster image: hero-video.jpg for preview

Used in: src/components/Hero.tsx
