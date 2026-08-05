import express from 'express';
import nodemailer from 'nodemailer';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const router = express.Router();

function requiredEnv(name) {
  const v = process.env[name];
  if (!v || String(v).trim().length === 0) return null;
  return String(v);
}

function escapeHtml(input) {
  return String(input)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '<')
    .replaceAll('>', '>')
    .replaceAll('"', '"')
    .replaceAll("'", '&#039;');
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false
});

router.use(limiter);
router.use(helmet());

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  // Basic validation (keep strict but user-friendly)
  const clean = {
    name: typeof name === 'string' ? name.trim() : '',
    email: typeof email === 'string' ? email.trim() : '',
    subject: typeof subject === 'string' ? subject.trim() : '',
    message: typeof message === 'string' ? message.trim() : ''
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email);

  const errors = [];
  if (clean.name.length < 2) errors.push('name is required');
  if (!emailOk) errors.push('email is invalid');
  if (clean.subject.length < 3) errors.push('subject is required');
  if (clean.message.length < 10) errors.push('message is required');

  if (errors.length) {
    return res.status(400).json({
      success: false,
      message: 'Invalid request',
      errors
    });
  }

  const EMAIL_USER = requiredEnv('EMAIL_USER') || requiredEnv('SMTP_USER');
  const EMAIL_PASS = requiredEnv('EMAIL_PASS') || requiredEnv('SMTP_PASS');
  const EMAIL_FROM = requiredEnv('EMAIL_FROM') || EMAIL_USER;
  const RECEIVER = requiredEnv('CONTACT_RECEIVER_EMAIL') || EMAIL_FROM;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error('[contact] Missing EMAIL_USER/EMAIL_PASS (or SMTP_USER/SMTP_PASS) env vars');
    return res.status(500).json({
      success: false,
      message: 'Email service is not configured'
    });
  }

  try {
    console.log('[contact] Incoming request', {
      name: clean.name,
      email: clean.email,
      subject: clean.subject,
      messageLen: clean.message.length
    });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    const html = `
      <h2>New Contact Request</h2>
      <p><b>Name:</b> ${escapeHtml(clean.name)}</p>
      <p><b>Email:</b> ${escapeHtml(clean.email)}</p>
      <p><b>Subject:</b> ${escapeHtml(clean.subject)}</p>
      <p><b>Message:</b></p>
      <p style="white-space:pre-wrap;">${escapeHtml(clean.message)}</p>
    `;
await transporter.verify();
const info = await transporter.sendMail({
      from: EMAIL_FROM,
      to: RECEIVER,
      subject: `Portfolio Contact: ${clean.subject}`,
      html,
      text: `New contact request\n\nName: ${clean.name}\nEmail: ${clean.email}\nSubject: ${clean.subject}\nMessage:\n${clean.message}`
    });

    console.log('[contact] Email sent', {
      messageId: info?.messageId,
      response: info?.response
    });

    return res.status(200).json({
      success: true,
      message: 'Email Sent',
      mail: {
        messageId: info?.messageId
      }
    });
  } catch (err) {
    console.error('[contact] sendMail failed', {
      name: err?.name,
      message: err?.message,
      code: err?.code,
      response: err?.response
    });
    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: process.env.NODE_ENV === 'production' ? undefined : String(err?.message || err)
    });
  }
});

export { router as contactRouter };

