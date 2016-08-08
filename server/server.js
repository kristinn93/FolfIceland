/* @flow weak */

import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import parser from 'koa-body'
import graphqlHTTP from 'koa-graphql-next'

import schema from './graphql/schema'

export default () => {
  const app = new Koa()

  const router = new Router()

  router.get('/healthy', async (ctx) => {
    ctx.body = {message: '🎉'}
  })

  app.use(logger()).use(parser())
  app.use(router.routes()).use(router.allowedMethods())
  app.use(graphqlHTTP({
    schema: schema(),
    graphiql: true,
  }))
  return app
}
