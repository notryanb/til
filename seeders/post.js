'use strict';

var chance = require('chance');

module.exports = (db, types, chance) => {
  let model = db.models.Post;
  let models = [];
  let count = 10;

  const generatePost = () => {
    const post = {
      title: chance.sentence(),
      body: chance.paragraph(),
      published_date: chance.date(),
      published: true
    };
  return post;
  };

  for(var i = 0; i < count; count++) {
    models.push(generatePost());
  }
  console.log(models);
  return model.bulkCreate(models);
};
