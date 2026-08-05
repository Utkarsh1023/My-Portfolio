const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://localhost:4173'
];

// Comma-separated CLIENT_ORIGIN from env (e.g. https://app.vercel.app,https://www.app.vercel.app)
const envOrigins = (process.env.CLIENT_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

export const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

// Whether to enforce a strict allowlist.
// Defaults to false for the public contact/portfolio API so any deployed
// frontend works out of the box. Set STRICT_CORS=true in production if you
// want to reject all origins not listed in CLIENT_ORIGIN.
const STRICT_CORS = String(process.env.STRICT_CORS || 'false').toLowerCase() === 'true';

export function isAllowedOrigin(origin) {
  if (!origin) return true; // allow non-browser clients (curl, Postman, mobile)
  if (!STRICT_CORS) return true; // relax mode: reflect any browser origin
  return allowedOrigins.includes(origin);
}

export function corsOptions(origin, callback) {
  if (isAllowedOrigin(origin)) {
    // In relaxed mode, echo the request origin back so any browser (local dev
    // or any deployed frontend) is allowed. Non-browser clients send no origin.
    return callback(null, !STRICT_CORS && origin ? origin : true);
  }
  // In strict mode, a disallowed origin is rejected with a clear error.
  return callback(new Error('Not allowed by CORS'));
}
