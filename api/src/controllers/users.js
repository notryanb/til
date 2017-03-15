import models from '../models';
const User = models.User;

function *index() {
  const users = User.findAll().then((users) => users);
  if (!users) return this.throw(404, 'no users');
  this.body = yield users;
}

function *show() {
  const user = User.findById(this.params.id).then((user) => user);
  if (!user) return this.throw(404, 'invalid post id');
  this.body = yield { user: user };
}

//function *create() {
  //this.accepts('json', 'text');
  //const post = this.querystring.split('=')[1];
  //console.log("THIS POST: ", post);

  //const id = posts.push(post) - 1;
  //post.created_at = new Date();
  //post.id = id;
  //this.redirect('/');
//}

export default {
  index,
  show
}


