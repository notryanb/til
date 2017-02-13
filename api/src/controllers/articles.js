const Sequelize = require('sequelize');
const shx = require('shelljs/global');

/*
 * TODO
 *
 *  - Need to establish db connection
 *  - Routes will directly manipulate data
 *      -> ex. new post will take params and send off to db
 *             Possibly look into intermediate module for
 *             more complicated actions.
 */

const psqlUser = exec(`whoami`).stdout.trimRight();
const connection = new Sequelize('til_dev', psqlUser, 'password', {
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

connection.sync().then(function () {
  return Article.create({
    author: 'Ryan',
    content: 'Updated names'
  });
});

connection.sync({logging: console.log }).then(function () {
  return Article.create({
    author: 'Ryan',
    content: 'Updated Another'
  });
});


function findArticles(){
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

//export default {
  //index,
  //show
//}
//
module.exports = {
  index,
  show
}
