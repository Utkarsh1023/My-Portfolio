# Premium MERN Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Tailwind CSS, Framer Motion on the frontend, and Express + MongoDB + Nodemailer on the backend.

## Features
- Dark theme + glassmorphism UI
- Purple/blue gradient accents
- Framer Motion animations
- React Router navigation
- Tailwind CSS styling
- Portfolio sections: Hero, About, Skills, Experience, Projects, Services, Contact
- Contact form (validation + Nodemailer)
- Admin login endpoint (JWT protected)

## Repo Structure
```
├── client/          # React + Vite + TypeScript frontend
├── server/          # Express + MongoDB backend
├── render.yaml      # Render blueprint (backend)
└── .gitignore
```

---

## Quick Start (Local Development)

### Prerequisites
- Node.js 18+ (npm)
- MongoDB Atlas connection string
- Gmail App Password (for Nodemailer)

### 1) Backend
```bash
cd server
npm install
cp .env.example .env   # fill in MONGODB_URI, EMAIL_USER, EMAIL_PASS, JWT_SECRET
npm run dev            # http://localhost:5000
```

### 2) Frontend
```bash
cd client
npm install
cp .env.example .env   # set VITE_API_URL=http://localhost:5000
npm run dev            # http://localhost:5173
```

---

## Deployment

This repo is configured to deploy with **Vercel** (frontend) and **Render** (backend). The backend requires MongoDB Atlas.

### Step 1 — Deploy Backend to Render

1. Push the repo to GitHub.
2. In the **Render Dashboard**, click **New → Blueprint**, and select the repo.
   - Render auto-detects `render.yaml` at the repo root and scaffolds the service.
   - **Root directory:** `server` · **Build:** `npm install` · **Start:** `npm start`
3. Set these **environment variables** in the Render service dashboard:
   | Key | Value |
   | --- | --- |
   | `MONGODB_URI` | Your MongoDB Atlas connection string (must be a valid `mongodb+srv://...` URI) |
   | `JWT_SECRET` | A long random secret |
   | `CLIENT_ORIGIN` | Your exact Vercel frontend URL(s), comma-separated, e.g. `https://your-portfolio.vercel.app` |
   | `EMAIL_USER` | Gmail address used for SMTP login (e.g. `you@gmail.com`) |
   | `EMAIL_PASS` | Gmail **App Password** (16 chars, no spaces) |
   | `NODE_ENV` | `production` |
   - Optional: `SMTP_HOST` (default `smtp.gmail.com`), `SMTP_PORT` (default `465`), `EMAIL_FROM`, `CONTACT_RECEIVER_EMAIL`.
4. After deploy, note your backend URL like `https://your-backend.onrender.com` and verify it is "Live" (not "Spinning down"/"Crashed").

### Step 2 — Deploy Frontend to Vercel

1. In **Vercel Dashboard**, click **New Project** and import the repo.
2. Set:
   - **Root Directory:** `client`
   - **Framework Preset:** Vite
3. Add **Environment Variable**:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```
4. Deploy. Vercel uses `client/vercel.json` for SPA rewrites automatically.

### Step 3 — Connect Frontend → Backend

Make sure `CLIENT_ORIGIN` on Render contains exactly the Vercel URL(s) (protocol + domain, no trailing slash). Then test the contact form.

---

## Environment Variables

### `client/.env.example`
| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Backend base URL (e.g. `http://localhost:5000` or `https://your-backend.onrender.com`) |

### `server/.env.example`
| Variable | Description |
| --- | --- |
| `NODE_ENV` | `development` or `production` |
| `PORT` | Server port (Render sets this automatically) |
| `CLIENT_ORIGIN` | Comma-separated allowed frontend origins (CORS) |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret for JWT signing |
| `JWT_EXPIRES_IN` | e.g. `7d` |
| `EMAIL_USER` | Gmail address |
| `EMAIL_PASS` | Gmail App Password |

---

## Health Check
```bash
curl https://your-backend.onrender.com/health
# => {"ok":true}
```

---

## Notes
- Never commit `.env` files — the repo `.gitignore` protects them.
- For production email via Gmail, use an App Password, not your account password.
- On Render free tier, the service spins down after inactivity; the first request may be slow.

---

## Troubleshooting

### Contact form → `net::ERR_CONNECTION_REFUSED`
The frontend is calling `http://localhost:5000` instead of your deployed backend.
- **Cause:** `VITE_API_URL` is not set on Vercel (or is set to `localhost`).
- **Fix:** In Vercel → Project → Settings → Environment Variables, add:
  ```
  VITE_API_URL=https://your-backend.onrender.com
  ```
  Then **redeploy** (env vars are inlined at build time).

### Contact form → CORS error in browser
- **Cause:** `CLIENT_ORIGIN` on Render does not include your exact Vercel URL.
- **Fix:** On Render → Service → Environment, set:
  ```
  CLIENT_ORIGIN=https://your-portfolio.vercel.app
  ```
  (comma-separated if multiple, no trailing slash) and redeploy. The server logs the allowed origins at startup.

### Backend "Crashed" / "MongooseServerSelectionError"
- **Cause:** MongoDB Atlas connection failed (e.g. network access not open, or invalid URI).
- **Fix:** In MongoDB Atlas → Network Access → Add IP → `0.0.0.0/0` (Allow all). Confirm `MONGODB_URI` on Render is a valid `mongodb+srv://...` string.
- **Note:** Since v1.1, the server no longer crashes if MongoDB is down — the contact/email API still works independently.

### Emails not sending (API returns "Failed to send email")
- **Cause:** Gmail SMTP blocked or wrong credentials.
- **Fix:** Use a Gmail **App Password** (16 chars, no spaces) for `EMAIL_PASS`, not your normal password. Enable 2-Step Verification first, then create the app password at myaccount.google.com/apppasswords.

### Testing the API
**Postman** — `POST https://your-backend.onrender.com/api/contact` with header `Content-Type: application/json` and body:
```json
{
  "name": "Test",
  "email": "you@example.com",
  "subject": "Hello",
  "message": "This is a test message that is long enough."
}
```
**Browser** — submit the contact form on your deployed site and check the status message.
