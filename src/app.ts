import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import pageRouter from './routers/page.route';

const app = express();

app.use(express.json());

app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log('================================');
  console.log('Request Initiated');
  console.log('url: ', req.url);
  console.log('body: ', req.body);
  console.log('method: ', req.method);
  console.log('================================');
  next();
});

/*
 * Routers
 */
app.use(pageRouter);

export default app;
