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

export function isAllowedOrigin(origin) {
  if (!origin) return true; // allow non-browser clients (curl, Postman, mobile)
  return allowedOrigins.includes(origin);
}

export function corsOptions(origin, callback) {
  if (isAllowedOrigin(origin)) {
    return callback(null, true);
  }
  // Do NOT throw here — report the error as a normal CORS failure so the
  // browser still gets a clear response (and dev logs are useful).
  return callback(new Error('Not allowed by CORS'));
}
