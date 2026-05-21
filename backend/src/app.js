import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { itemsRouter } from './routes/items.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();

  app.use(morgan('dev'));
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || 'http://localhost:4200',
    })
  );
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use('/api/items', itemsRouter);

  app.use(errorHandler);

  return app;
}
