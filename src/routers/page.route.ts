import { Router } from 'express';
import { createPage, getPageConfig } from '../controllers/page.controller';

const router = Router();

router.get('/page/:type', getPageConfig);
router.post('/page', createPage)

export default router;
