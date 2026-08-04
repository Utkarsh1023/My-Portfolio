import { Router } from 'express';

import { authRouter } from './auth.routes.js';
import { contactRouter } from './contact.routes.js';

export const apiRouter = Router();

// Health / future routers
apiRouter.get('/', (req, res) => res.json({ ok: true }));

apiRouter.use('/auth', authRouter);
apiRouter.use('/contact', contactRouter);




