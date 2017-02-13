//const koa = require('koa');
//const logger = require('koa-logger');
//const bodyParser = require('koa-bodyparser');
//const cors = require('koa-cors');
//const router = require('./routers/index.js');

import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import router from './routers/index.js';

const app = Koa();

app.use(cors());
app.use(logger());
app.use(router.routes());
app.listen(3030);
