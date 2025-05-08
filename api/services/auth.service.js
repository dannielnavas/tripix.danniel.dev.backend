const boom = require('@hapi/boom');
const { config } = require('./../config/config');
const UserServices = require('./user.service');

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

module.exports = AuthServices;
