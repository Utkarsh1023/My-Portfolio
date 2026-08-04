import jwt from 'jsonwebtoken';

export function requireAdmin(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }

    const token = header.slice('Bearer '.length);
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (!payload || payload.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid/expired token' });
  }
}

