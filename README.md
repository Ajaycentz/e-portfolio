# E-Portfolio

A highly creative, motion-forward portfolio built with Next.js App Router, TypeScript, TailwindCSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

## Tech
- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide icons
- next/image

## Project structure
- `src/data/profile.ts` - single source of truth for all content
- `src/app` - routes and layouts
- `src/components` - UI and layout components
- `data/inquiries.json` - stored contact submissions
- `public` - images and `cv.pdf`

## Notes
- Animations respect `prefers-reduced-motion`.
- Custom cursor and magnetic effects disable on touch devices.
