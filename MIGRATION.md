# Migration Guide

Use this guide to update the portfolio content and assets.

## Update profile content
Edit `src/data/profile.ts`. All sections on the site are driven from this file:
- `personal` - name, title, birthday, location, email, phone, availability
- `socials` - external links
- `skills`, `tools`, `services`
- `experience`, `education`
- `projects` - add or remove work items
- `testimonials`

## Add or replace images
1. Place images inside `public/projects/`.
2. Update the `cover` and `gallery` fields in `src/data/profile.ts` to match new paths.
3. Keep image sizes consistent for best layout results.

## Replace portrait
1. Add a new portrait image to `public/` (example: `public/portrait.jpg`).
2. Update `personal.portrait` in `src/data/profile.ts`.

## Update CV
1. Replace `public/cv.pdf` with your PDF.
2. Keep the filename as `cv.pdf` to avoid breaking the About page link.

## Contact inquiries
- Submissions are stored in `data/inquiries.json`.
- Clear or archive this file as needed.
