const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class UserService {
  constructor() {}

  async find() {
    const client = models.User.findAll();
    return client;
  }

  async findByEmail(email) {
    const client = models.User.findOne({
      where: {
        email,
      },
    });
    return client;
  }

  async create(data) {
    const newUser = await models.User.create({
      ...data,
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}
module.exports = UserService;
