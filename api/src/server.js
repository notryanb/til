"use-strict";

const koa = require('koa');
const logger = require('koa-logger');
const route = require('koa-route');
const app = koa();


/*
 * TODO
 *
 *  - Need to establish db connection
 *  - Routes will directly manipulate data
 *      -> ex. new post will take params and send off to db
 *             Possibly look into intermediate module for
 *             more complicated actions.
 */

// DB will go here
const posts = [];

// Middleware
app.use(logger());

// Route Middleware
// this is where Routes are listed, 
// similar to Rails `routes.rb` file
app.use(route.get('/', list));
app.use(route.get('/post/:id', show));
app.use(route.post('/post', create));

/*
 Route definitions. 
 This is similar to controller actions
 TODO: 
  - Look into splitting these into controller files.
  - Look into best practices for complicated routes
  */

function *list() {
  this.body = yield { posts: posts };
}

function *show(id) {
  var post = posts[id];
  if (!post) this.throw(404, 'invalid post id');
  this.body = yield { post: post };
}

function *create() {
  this.accepts('json', 'text');
  const post = this.querystring.split('=')[1];
  console.log("THIS POST: ", post);

  const id = posts.push(post) - 1;
  post.created_at = new Date();
  post.id = id;
  this.redirect('/');
}

app.listen(3030);
