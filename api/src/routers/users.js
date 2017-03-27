import Router from 'koa-router';
import users from '../controllers/users';

const router = Router({
    prefix: '/users'
});
router.get('/sign_in', users.signIn);
router.post('/sign_in', users.LogIn);
router.get('/logout', users.LogOut);
//router.get('/', users.index);

export default router;



