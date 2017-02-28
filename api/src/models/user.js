'use strict';

import bcrypt from 'bcrypt';

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 50]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 50]
      }
    },
    email: {
      type: DataTypes.STRING
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    bio: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    passwordDigest: {
      type: DataTypes.STRING,
      field: 'password_digest',
      validate: {
        notEmpty: true,
        len: [8, 128]
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    passwordConfirmation: {
      type: DataTypes.VIRTUAL
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'users',
    indexes: indexes: [{ unique: true, fields: ['email'] }],
    classMethods: {
      associate: function(models) {
        user.hasMany(models.Post, { foreignKey: 'user_id' });
      }
    },
    instanceMethods: {
      authenticate: function(value) {
        if (bcrypt.compareSync(value, this.passwordDigest)){
          return this;
        }
        else{
          return false;
        }
      }
    }
  });

  function hasSecurePassword(user, options, callback) {
    if (user.password != user.passwordConfirmation) {
      throw new Error('Password confirmation doesn\'t match Password');
    }
    bcrypt.hash(user.get('password'), 10, function(err, hash) {
      if (err) return callback(err);
      user.set('passwordDigest', hash);
      return callback(null, options);
    });
  }

  User.beforeCreate(function(user, options, callback) {
    user.email = user.email.toLowerCase();
    if (user.password){
      hasSecurePassword(user, options, callback);
    }
    else{
      return callback(null, options);
    }
  });

  User.beforeUpdate(function(user, options, callback) {
    user.email = user.email.toLowerCase();
    if (user.password){
      hasSecurePassword(user, options, callback);
    }
    else{
      return callback(null, options);
    }
  });

  return user;
};
