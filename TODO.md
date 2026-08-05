# Fix Contact Form Email Delivery (Deployment)

## Progress
- [x] Fix MongoDB non-fatal connection (server starts even if DB down)
- [x] Fix contact route double-path bug (`/contact/contact` → `/api/contact`)
- [x] Create `client/.env` for local dev
- [x] Create production-ready CORS config (`server/src/middlewares/cors.js`)
- [x] Rewrite `server/src/index.js` with proper preflight handling
- [x] Add CORS-aware error handler (returns 403 with helpful message)
- [x] Verify preflight OPTIONS from Vercel origin returns correct headers

## Remaining (config steps for user)
- [ ] Set `CLIENT_ORIGIN=https://utkarsh-anand-portfolio.vercel.app` on Render
- [ ] Set `VITE_API_URL=https://utkarshs-portfolio.onrender.com` on Vercel
- [ ] Redeploy both frontend and backend
- [ ] Verify email sends
