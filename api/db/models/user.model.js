import { DataTypes, Model, Sequelize } from 'sequelize';

const USER_TABLE = 'users';

const UserSchema = {
  userId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'user_id',
    type: DataTypes.INTEGER,
  },
  googleId: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'google_id',
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  fullName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'full_name',
  },
  profilePicture: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'profile_picture',
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'free',
  },
  subscriptionPlanId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'subscription_plan_id',
  },
  tokensRemaining: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'tokens_remaining',
  },
  tokensResetDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'tokens_reset_date',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

export { User, USER_TABLE, UserSchema };
