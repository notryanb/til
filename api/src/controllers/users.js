//import models from '../models';
//const User = models.User;

//function *index() {
  //const users = User.findAll().then((users) => users);
  //if (!users) return this.throw(404, 'no users');
  //this.body = yield users;
//}

//function *show() {
  //const user = User.findById(this.params.id).then((user) => user);
  //if (!user) return this.throw(404, 'invalid post id');
  //this.body = yield { user: user };
//}

//function *create() {
  //this.accepts('json', 'text');
  //const post = this.querystring.split('=')[1];
  //console.log("THIS POST: ", post);

  //const id = posts.push(post) - 1;
  //post.created_at = new Date();
  //post.id = id;
  //this.redirect('/');
//}

//export default {
  //index,
  //show
//}




import models from '../models';
const User = models.User;

const signIn = async (ctx, _next) => {
  ctx.response.body = { "test": "testing" };
  //if(ctx.state.isUserSignIn){
    //ctx.redirect('/');
    //return;
  //}
  //const locals = {
    //nav: 'signIn'
  //};
  //await ctx.render('users/signIn', locals);
};

const LogOut = (ctx, _next) => {
  if(!ctx.state.isUserSignIn){
    ctx.redirect('/');
    return;
  }
  ctx.session.userId = null;
  ctx.flashMessage.notice = 'Log Out Successfully!';
  ctx.redirect('/');
};

const LogIn = async (ctx, _next) => {
  const body = ctx.request.body;
  if (!(body.email && body.password)) {
    const locals = { nav: 'signIn' };
    //await ctx.render('users/signIn', locals);
    return;
  }
  let user = await models.User.findOne({ where: { email: body.email }});
  if(user && user.authenticate(body.password)) {
    ctx.session.userId = user.id;
    ctx.status = 302;
    //ctx.flashMessage.notice = 'Log In Successfully!';
    console.log("SUCCESS");
  } else {
    console.log("login Failed");
    //const locals = { nav: 'signIn' };
    //ctx.flashMessage.warning = 'User name or Password Error.';
    //await ctx.render('users/signIn', locals);
  }
};

export default {
  signIn,
  LogIn,
  LogOut
};
