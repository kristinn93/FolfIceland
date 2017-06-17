/* @flow weak */

import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import parser from 'koa-body';
import graphqlHTTP from 'koa-graphql-next';
import mongoose from 'mongoose';

import schema from './graphql/schema';

export default () => {
  const app = new Koa();

  const router = new Router();

  router.get('/healthy', async ctx => {
    ctx.body = {message: '🎉'};
  });
  //mongoose.connect('mongodb://folf:1337@ds147975.mlab.com:47975/folf')
  //const CourseSchema = new mongoose.Schema({
  //  name: {type: String},
  //  city: {type: String},
  //  hole: {type: Number},
  //  par: {type: Number},
  //  color: {type: String},
  //  location: {
  //    longitude: {type: Number},
  //    latitude: {type: Number},
  //  },
  //})
  //const mongoCourse = mongoose.model('folf', CourseSchema)
  //router.post('/log', async (ctx) => {
  //  console.log(ctx.request.body)
  //  const data = ctx.request.body
  //  const location = JSON.parse(data.location.location)
  //  const newCourse = new mongoCourse({
  //    name: data.course.navigationState.name,
  //    city: data.course.navigationState.city,
  //    hole: data.location.hole,
  //    par: data.location.par,
  //    color: data.location.color,
  //    location: {
  //      longitude: location.coords.longitude,
  //      latitude: location.coords.latitude,
  //    },
  //  })
  //  newCourse.save()
  //  ctx.body = {message: 'lol'}
  //  ctx.status = 201
  //})
  app.use(logger()).use(parser());
  app.use(router.routes()).use(router.allowedMethods());
  app.use(
    graphqlHTTP({
      schema: schema(),
      graphiql: true,
    })
  );
  return app;
};
