import models from '../models';
import App from '../views/components/App';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ejs from 'ejs';

const Post = models.Post;

const index = async (ctx, next) => {
  const posts = await Post.findAll().then(posts => posts);
  const prerenderHtml = await renderToString(
    <App posts={ posts } />
  );
  const locals = {
    title: 'Home',
    nav: 'index',
    reactHTML: prerenderHtml,
    preloadedState: { posts: posts },
  };
  await ctx.render('../views/index', locals);
}

const show = async (ctx, next) => {
  const post = await Post.findById(ctx.params.id).then((post) => [post]);
  const prerenderHtml = await renderToString(
    <App posts={ post } />
  );
  const locals = {
    title: 'Home',
    nav: 'index',
    reactHTML: prerenderHtml,
    preloadedState: { posts: post },
  };
  await ctx.render('../views/index', locals);
}

export default {
  index,
  show
}

