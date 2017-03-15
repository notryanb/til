import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import session from 'koa-generic-session';
import cors from 'koa-cors';
import router from './routers';
import db from './models';

const app = Koa();
const sequelize = db.sequelize;

app.use(convert(cors()));
app.use(logger());
app.use(router.routes());
sequelize
  .sync()
  .then(() => app.listen(3030));
