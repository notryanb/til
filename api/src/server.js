import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import json from 'koa-json';
import session from 'koa-generic-session';
import cors from 'koa-cors';
import router from './routers';
import db from './models';

const app = new Koa();
const sequelize = db.sequelize;

app
  .use(bodyParser())
  .use(convert(cors()))
  .use(convert(json()))
  .use(convert(logger()))
  .use(router.routes())
  .use(router.allowedMethods());

sequelize
  .sync()
  .then(() => app.listen(3030));
