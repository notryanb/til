import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import session from 'koa-generic-session';
import json from 'koa-json';
import logger from 'koa-logger';
import koaRedis from 'koa-redis';
import csrf from 'koa-csrf';
import cors from 'koa-cors';
import views from 'koa-views';
import router from './routers';
import db from './models';
import config from './config/config';

const app = new Koa();
const sequelize = db.sequelize;
const redisStore = koaRedis({
  url: config.redisUrl
});

app.keys = [config.secretKeyBase];

app.use(views(__dirname + '/views', { extension: 'ejs' }));

app
  .use(bodyParser())
  .use(cors())
  .use(convert(json()))
  .use(convert(crsf()))
  .use(convert(logger()))
  .use(convert(session({
    store: redisStore,
    prefix: 'til:sess:',
    key: 'til.sid'
  })))
  .use(router.routes())
  .use(router.allowedMethods());


// REPL access for 'yarn console'
if (process.argv[2] && process.argv[2][0] == 'c') {
  const repl = require('repl');
  global.models = db;
  repl.start({
    prompt: '> ',
    useGlobal: true
  }).on('exit', () => { process.exit(); });
}
else {
  sequelize
    .sync()
    .then(() => app.listen(3030));
}

