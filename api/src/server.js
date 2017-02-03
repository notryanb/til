"use-strict";

const koa = require('koa');
const logger = require('koa-logger');
const route = require('koa-route');
const bodyParser = require('koa-bodyparser');
const Sequelize = require('sequelize');
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

const connection = new Sequelize('til_dev', 'ryan', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Article = connection.define('article', {
  author: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Article.sync({force: true}).then(function () {
  return Article.create({
    author: 'Ryan',
    content: 'Better names'
  });
});

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

function findArticles(){
  return Article.findAll().then(function (article) {
    return article;
  });
}

function *list() {
  this.body = yield findArticles();
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
