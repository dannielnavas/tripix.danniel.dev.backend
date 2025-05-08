const { Strategy } = require('passport-local');
const AuthServices = require('./../../../services/auth.service');

const service = new AuthServices();

const localStrategy = new Strategy(
  {
    usernameField: 'email',
  },
  async (email, done) => {
    try {
      const user = await service.getUser(email);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  },
);

module.exports = localStrategy;
