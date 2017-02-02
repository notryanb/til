const koa = require('koa');
const app = koa();

app.use(function *() {
  this.body = 'Hello TIL!';
});

app.listen(3030);
