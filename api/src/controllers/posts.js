import models from '../models';
const Post = models.Post;

function *index() {
  const posts = Post.findAll().then((posts) => posts);
  if (!posts) return this.throw(404, 'no posts');
  this.body = yield posts;
}

function *show() {
  const post = Post.findById(this.params.id).then((post) => post);
  if (!post) return this.throw(404, 'invalid post id');
  this.body = yield { post: post };
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

