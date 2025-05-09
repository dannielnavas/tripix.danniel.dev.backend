import { USER_TABLE, UserSchema } from '../models/user.model.js';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn(USER_TABLE, 'recovery_token');
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn(
      USER_TABLE,
      'recovery_token',
      UserSchema.recoveryToken,
    );
  },
};
