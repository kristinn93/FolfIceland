import test from 'ava'
import mockgoose from 'mockgoose'
import mongoose from 'mongoose'
import request from 'supertest-koa-agent'

import config from '../config'
import app from '../server'

let server
test.before(async () => {
  await mockgoose(mongoose)
  server = app(mongoose, config)
})
test.afterEach((t) => {
  mockgoose.reset(err => {
    if (err) t.fail(err)
  })
})

test('healthy should 200', async (t) => {
  const res = await request(server).get('/healthy')
  t.is(res.status, 200)
})
