import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import router from './routers/index';
import db from './models';

const app = Koa();
const sequelize = db.sequelize;

app.use(cors());
app.use(logger());
app.use(router.routes());
sequelize
  .sync()
  .then(() => app.listen(3030));
