'use strict';

var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../../../config/database.js')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
  //Initialize models

  let modules = [
    require('./post.js'),
    require('./user.js')
  ];

  modules.forEach((module) => {
    const model = module(sequelize, Sequelize, config);
    db[model.name] = model;
  });

  // Apply associations
  Object.keys(db).forEach((key) => {
    if ('associate' in db[key]) {
      db[key].associate(db);
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
