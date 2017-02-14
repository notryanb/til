'use strict';
module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define('article', {
    author: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Article;
};
