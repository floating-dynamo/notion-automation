import { Router } from 'express';
import { createPage, getPageConfig, addBlock } from '../controllers/page.controller';

const router = Router();

router.get('/page/:type', getPageConfig);
router.post('/page', createPage)
router.post('/page/addBlock', addBlock)

export default router;
