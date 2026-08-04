# Premium MERN Portfolio (Production-Ready)

This repository contains a premium, modern, responsive portfolio built with the MERN stack.

## Features
- Dark theme + glassmorphism UI
- Purple/blue gradient accents
- Framer Motion animations
- React Router navigation
- Tailwind CSS styling
- Portfolio sections:
  - Hero (typing effect, CTAs, social icons)
  - About (stats)
  - Skills (animated cards)
  - Experience timeline
  - Featured projects (filtering)
  - GitHub statistics (API via backend proxy)
  - Coding profiles
  - Services
  - Testimonials slider
  - Certifications (enlarge)
  - Tech stack animation
  - Contact form (validation + Nodemailer)
  - Footer + back-to-top
- Admin dashboard (JWT protected)
  - Manage Projects / Certificates / Experience / Skills / Testimonials / Messages
- Backend:
  - Express + MongoDB (Mongoose)
  - JWT auth
  - Rate limiting, helmet, CORS
  - Cloudinary image upload
  - Nodemailer email sending

## Repo Structure
- `client/` — React + Tailwind UI
- `server/` — Express REST API + MongoDB

## Quick Start (after files are generated)
```bash
# 1) backend
cd server
npm install
cp .env.example .env
npm run dev

# 2) frontend
cd ../client
npm install
cp .env.example .env
npm run dev
```

## Deployment (high level)
- Frontend: Vercel
- Backend: Render
- DB: MongoDB Atlas

## Notes
The codebase is intended to be Lighthouse-friendly through:
- responsive image handling
- code splitting/lazy loading
- semantic headings and accessible components

