import 'dotenv/config';
import express from 'express';
import pageRouter from './routers/page.route';

const app = express();

app.use(express.json());

/* 
* Routers
*/
app.use(pageRouter);

export default app;
