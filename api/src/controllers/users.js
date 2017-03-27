import models from '../models';
const User = models.User;

const signIn = async (ctx, _next) => {
  ctx.response.body = { "test": "testing" };
};

const LogOut = (ctx, _next) => {
  if(!ctx.state.isUserSignIn){
    ctx.redirect('/');
    return;
  }
};

const LogIn = async (ctx, _next) => {
  const body = ctx.request.body;
  if (!(body.email && body.password)) {
    ctx.response.body = { msg: 'LOGIN FAILED, MISSING PARAMS' };
  }

  let user = models.User.findOne({ where: { email: body.email }});

  await user.then(user => {
    if(user && user.authenticate(body.password)) {
      ctx.session.userId = user.id;
      ctx.status = 302;
      ctx.response.body = { msg: 'FOUND USER' };
    } else {
      ctx.response.body = { msg: 'LOGIN FAILED' };
    }
  });
};

export default {
  signIn,
  LogIn,
  LogOut
};
