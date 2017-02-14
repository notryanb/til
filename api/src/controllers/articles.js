import models from '../models';
const Article = models.article;

function *index() {
  const articles = Article.findAll().then((article) => article);
  this.body = yield articles;
}

function *show(next) {
  const article = Article.findById(this.params.id).then((article) => article);
  if (!article) return this.throw(404, 'invalid post id');
  this.body = yield { article: article };
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
