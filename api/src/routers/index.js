"use-strict";
//import fs from 'fs';
//import path from 'path';
//import Router from 'koa-router';
//import articles from '../controllers/articles';

const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const articles = require('../controllers/articles.js');

const basename = path.basename(module.filename);
const router = Router();

fs
  .readdirSync(__dirname)
  .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
  .forEach(function(file) {
        var route = require(path.join(__dirname, file));
        router.use(route.routes());
      });
router.get('/', articles.index);

//export default router;
module.exports = router;
