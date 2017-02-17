import Router from 'koa-router';
import postsController from '../controllers/posts';
import postsRouter from './posts';

const router = Router();

// App Root
// Can be any route
router.get('/', postsController.index);

// Add in all other routes here
router.use(postsRouter.routes());

export default router;
