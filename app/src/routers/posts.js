import Router from 'koa-router';
import postsController from '../controllers/posts';

const router = Router({
    prefix: '/posts'
});

router.get('/',    postsController.index);
router.get('/new', postsController.newPost);
router.get('/:id', postsController.show);
router.post('/', postsController.create);

/*

  Below are examples of chaining functions for auth.
  This is similar to before/after hooks in RoR
 
*/


//router.get('/new', articles.checkLogin, articles.newArticle);
//router.get('/:id', articles.show);
//router.put('/:id', articles.checkLogin, articles.checkArticleOwner, articles.checkParamsBody, articles.update);
//router.get('/:id/edit', articles.checkLogin, articles.checkArticleOwner, articles.edit);
//router.post('/', articles.checkLogin, articles.checkParamsBody, articles.create);

export default router;


