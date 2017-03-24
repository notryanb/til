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
  // ctx.session.userId = null;
  // ctx.flashMessage.notice = 'Log Out Successfully!';
  // ctx.redirect('/');
};

const LogIn = async (ctx, _next) => {
  const body = ctx.request.body;
  if (!(body.email && body.password)) {
    const locals = { nav: 'signIn' };
    return;
  }
  let user = await models.User.findOne({ where: { email: body.email }});
  if(user && user.authenticate(body.password)) {
    ctx.session.userId = user.id;
    ctx.status = 302;
    console.log("SUCCESS");
  } else {
    console.log("login Failed");
  }
};

export default {
  signIn,
  LogIn,
  LogOut
};
