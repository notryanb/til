import models from '../models';
import App from '../views/components/App';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ejs from 'ejs';

const Post = models.Post;

const index = async (ctx, next) => {
  const posts = await Post.findAll().then((posts) => posts);
  const prerenderHtml = await renderToString(
    <App posts={ posts } />
  );
  const locals = {
    title: 'Home',
    nav: 'index',
    reactHTML: prerenderHtml,
    preloadedState: { posts: posts },
    baseUrl: '/'
    // currentPage: page,
    // pages: parseInt(articleCount / 10 + 1)
  };
  await ctx.render('../views/index', locals);
  // await posts.then(() => ctx.response.body = posts)
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

