import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import { connectDB } from './lib/db.js';
import { notFound, errorHandler } from './middlewares/errorHandler.js';
import { corsOptions, allowedOrigins } from './middlewares/cors.js';
import { apiRouter } from './routes/index.js';

const app = express();
const port = process.env.PORT || 5000;

// Render (and other hosts) sit behind a reverse proxy and set the
// X-Forwarded-For header. Trust the first proxy hop so express-rate-limit
// can correctly identify client IPs (fixes ERR_ERL_UNEXPECTED_X_FORWARDED_FOR).
app.set('trust proxy', 1);

// MongoDB is optional for the contact/email feature. If it fails, do not crash
// the server so /api/contact (and other DB-independent routes) still work.
try {
  await connectDB();
} catch (err) {
  console.error('MongoDB initialization error (continuing without DB):', err.message);
}

// Security headers. crossOriginResourcePolicy is required so the browser can
// load cross-origin resources (e.g. fonts/images served from this API).
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));

// CORS must be registered BEFORE routes so both the preflight OPTIONS request
// and the actual request get the correct Access-Control-Allow-* headers.
app.use(
  cors({
    origin: corsOptions,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Rate limiting - skip OPTIONS preflight requests so they are never blocked by
// the limiter (browsers send many preflights).
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => req.method === 'OPTIONS'
  })
);

app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/api', apiRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log('Allowed CORS origins:', JSON.stringify(allowedOrigins));
});

