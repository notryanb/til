import Router from 'koa-router';
import articlesController from '../controllers/articles';
import articleRouter from './articles';

const router = Router();

// App Root
// Can be any route
router.get('/', articlesController.index);

// Add in all other routes here
router.use(articleRouter.routes());

export default router;
