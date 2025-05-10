const SUBSCRIPTION_PLANS_TABLE = 'subscription_plans';

const SubscriptionPlanSchema = {
  planId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'plan_id',
  },
  planName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'plan_name',
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'description',
  },
  monthlyPrice: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'monthly_price',
  },
  tokensPerMonth: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'tokens_per_month',
  },
  isActive: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'is_active',
    defaultValue: true,
  },
};

class SubscriptionPlan extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SUBSCRIPTION_PLANS_TABLE,
      modelName: 'SubscriptionPlan',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

export { SUBSCRIPTION_PLANS_TABLE, SubscriptionPlan, SubscriptionPlanSchema };
