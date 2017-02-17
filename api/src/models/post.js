'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    published_date: DataTypes.DATE,
    published: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        post.belongsTo(models.user, { foreignKey: 'user_id' });
      }
    }
  });
  return post;
};
