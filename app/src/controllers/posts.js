import models from '../models';
import App from '../views/components/App';
import PostForm from '../views/components/posts/PostForm';
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

const newPost = async (ctx, next) => {
  const prerenderHtml = await renderToString(
    <PostForm />
  );
  const locals = {
    title: 'Home',
    nav: 'index',
    reactHTML: prerenderHtml,
  };
  await ctx.render('../views/index', locals);
}

const create = async (ctx, _next) => {
  const body = ctx.request.body;
  // const currentUser = ctx.state.currentUser;
  try {
    const currentUser = await models.User.findById(1);
    const article = await currentUser.createPost({ title: body.title, body: body.body });
    ctx.redirect('/');
  } catch (error) {
    ctx.redirect('/');
  }
  ctx.redirect('/');
};

export default {
  index,
  show,
  newPost,
  create
}

