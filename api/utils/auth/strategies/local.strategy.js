import { Strategy } from 'passport-local';
import AuthServices from './../../../services/auth.service.js';

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

export default localStrategy;
