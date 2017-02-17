import Router from 'koa-router';
import postsController from '../controllers/posts';
import usersController from '../controllers/users';
import postsRouter from './posts';
import usersRouter from './users';

const router = Router();

// App Root
// Can be any route
router.get('/', postsController.index);

// Add in all other routes here
router.use(postsRouter.routes());
router.use(usersRouter.routes());

export default router;
