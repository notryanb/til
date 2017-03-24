import models from '../models';
const Post = models.Post;

const index = async (ctx, _next) => {
  const posts = Post.findAll().then((posts) => posts);
  await posts;
  ctx.response.body = posts;
}

const show = async (ctx, _next) => {
  const post = Post.findById(ctx.params.id).then((post) => post);
  await post;
  ctx.response.body = post;
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

