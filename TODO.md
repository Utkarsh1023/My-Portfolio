# Fix Contact Form Email Delivery (Deployment)

## Steps
- [x] Gather understanding of codebase (client + server + deployment config)
- [x] Confirm plan with user
- [x] 1. Create `client/.env` pointing to local backend for dev
- [x] 2. Make MongoDB connection non-fatal in `server/src/lib/db.js` and `server/src/index.js`
- [x] 3. Fix contact route double-path bug (`/contact/contact` → `/api/contact`)
- [ ] 4. Document Render env vars (MONGODB_URI, CLIENT_ORIGIN, EMAIL_USER, EMAIL_PASS, JWT_SECRET)
- [ ] 5. Document Vercel env var (VITE_API_URL)
- [ ] 6. Document MongoDB Atlas network access (0.0.0.0/0)
- [ ] 7. Provide Postman + browser testing instructions
