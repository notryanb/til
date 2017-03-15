'use strict';

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    title: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
        len: [1, 100]
      }
    },
    body: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    published_date: {
      type: DataTypes.DATE
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableName: 'posts',
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.User, { foreignKey: 'user_id' });
      }
    },
    getterMethods : {
      createdAt: function() {
        return this.created_at;
      }
    }
  });
  return Post;
};
