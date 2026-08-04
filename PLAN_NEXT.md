# Next Implementation Step Plan

## Current state
- Repo scaffold exists: `server/` and `client/` with app shells running locally.

## Next coding milestone (small, correct step)
1) Backend: implement auth foundation + admin model
   - Create `server/src/models/User.js`
   - Create `server/src/middlewares/auth.js` (JWT verify)
   - Create `server/src/routes/auth.routes.js`
   - Mount routes in `server/src/routes/index.js`

2) Backend: implement portfolio models (minimal viable set)
   - Projects, Experience, Skills, Certificates, Testimonials, Messages

3) Frontend: routing skeleton
   - Create `client/src/routes/AppRoutes.tsx`
   - Add `/` and `/admin` routes + `ProtectedRoute`.

## Goal
Get a working admin login + protected route before building all UI sections.

