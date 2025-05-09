import boom from '@hapi/boom';
import { config } from './../config/config.js';
import UserServices from './user.service.js';

const service = new UserServices();

class AuthServices {
  async getUser(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }
}

export default AuthServices;
