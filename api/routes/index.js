const express = require('express');

const authRouter = require('./auth.router');
const userRouter = require('./user.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/users', userRouter);
}

module.exports = routerApi;
