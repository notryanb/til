import models from '../models';
import { renderToString } from 'react-dom/server';
import ejs from 'ejs';

const Post = models.Post;

const index = async (ctx, next) => {
  const posts = Post.findAll().then((posts) => posts);
  await posts.then(() => ctx.response.body = posts)
}

const show = async (ctx, next) => {
  const post = Post.findById(ctx.params.id).then((post) => post);
  await post;
  return ctx.response.body = post;
}

export default {
  index,
  show
}

