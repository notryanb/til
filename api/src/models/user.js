'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        user.hasMany(models.post, { foreignKey: 'user_id' });
      }
    }
  });
  return user;
};
