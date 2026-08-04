# Deployment Preparation Checklist

## Repo Hygiene
- [x] Create root `.gitignore` (node_modules, dist, .env, logs)
- [x] Untrack `client/node_modules`, `client/dist`, `server/.env` from git

## Backend (Render)
- [x] Point `server/package.json` start script to `node src/index.js`
- [x] Update CORS in `server/src/index.js` to support env-based origins
- [x] Add `render.yaml` blueprint for backend service

## Frontend (Vercel)
- [x] Update `ContactSection.tsx` to use `import.meta.env.VITE_API_URL`
- [x] Update `client/.env.example` with correct API URL
- [x] Add `client/vercel.json` for SPA rewrites

## Docs
- [x] Rewrite README with Vercel + Render deployment instructions

## Verify
- [x] Run `npm run build` in client — ✅ build succeeds (no errors)
- [x] Verify server syntax — ✅ all files pass `node --check`
- [x] Verify server behavior — ✅ server fails early if DB misconfigured (correct)
- [x] All `package.json` files valid JSON
- [x] `vercel.json` valid JSON
