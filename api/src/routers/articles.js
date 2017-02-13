import Router from 'koa-router';
import articles from '../controllers/articles';

//const Router = require('koa-router');
//const articles = require('../controllers/articles.js');

const router = Router({
    prefix: '/articles'
});

router.get('/:id', articles.show);
router.get('/', articles.index);


/*

  Below are examples of chaining functions for auth.
  This is similar to before/after hooks in RoR
 
*/


//router.get('/new', articles.checkLogin, articles.newArticle);
//router.get('/:id', articles.show);
//router.put('/:id', articles.checkLogin, articles.checkArticleOwner, articles.checkParamsBody, articles.update);
//router.get('/:id/edit', articles.checkLogin, articles.checkArticleOwner, articles.edit);
//router.post('/', articles.checkLogin, articles.checkParamsBody, articles.create);

// for require auto in index.js
//module.exports = router;
export default router;

