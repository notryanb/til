"use-strict";

const shx = require('shelljs/global');
const koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const Sequelize = require('sequelize');
const cors = require('koa-cors');
const Koa = require('koa');
const router = require('./routers/index.js');

/*
 *
 * Import needs to be transpiled
 * as Node currently does not support
 * ES6 module syntax
 *
 */

//import cors from 'koa-cors';
//import Koa from 'koa';
//import router from './routes';

const app = Koa();

app.use(cors());
app.use(logger());
app.use(router.routes());
app.listen(3030);
