import model from '../models';
const Article = model.Article;

function findArticles(){
  console.log(model);
  return Article.findAll().then(function (article) {
    return article;
  });
}

function *index() {
  this.body = yield findArticles();
}

function *show(id) {
  var post = posts[id];
  if (!post) this.throw(404, 'invalid post id');
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
