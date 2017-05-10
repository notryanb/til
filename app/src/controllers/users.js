import models from '../models';
import Login from '../views/components/login/Login';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ejs from 'ejs';

const User = models.User;

const signIn = async (ctx, _next) => {
  const prerenderHtml = await renderToString(
    <Login />
  );
  const locals = {
    title: 'Login',
    nav: 'login',
    reactHTML: prerenderHtml,
  };
  await ctx.render('../views/index', locals);
};

const LogOut = (ctx, _next) => {
  if(!ctx.state.isUserSignIn){
    ctx.redirect('/');
    return;
  }
};

const LogIn = async (ctx, _next) => {
  const body = ctx.request.body;
  if (!(body.email && body.password)) {
    await ctx.render('../views/fail');
  }

  let user = models.User.findOne({ where: { email: body.email }});

  await user.then(user => {
    if(user && user.authenticate(body.password)) {
      ctx.session.userId = user.id;
      ctx.status = 302;
      ctx.redirect('/');
    } else {
      ctx.render('../views/fail');
    }
  });
};

export default {
  signIn,
  LogIn,
  LogOut
};
