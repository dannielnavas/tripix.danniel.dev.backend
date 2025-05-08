const express = require('express');
const passport = require('passport');

const AuthServices = require('./../services/auth.service');
const service = new AuthServices();

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
