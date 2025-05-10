const SUBSCRIPTION_TRANSACTIONS_TABLE = 'subscription_transactions';

const SubscriptionTransactionSchema = {
  transactionId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,

    field: 'transaction_id',
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
  },
  subscriptionPlanId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'subscription_plan_id',
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'amount',
  },
  paymentMethod: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'payment_method',
  },
  paymentStatus: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'payment_status',
  },
  startDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'start_date',
  },
  endDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'end_date',
  },
};

class SubscriptionTransaction extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SUBSCRIPTION_TRANSACTIONS_TABLE,
      modelName: 'SubscriptionTransaction',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

export {
  SUBSCRIPTION_TRANSACTIONS_TABLE,
  SubscriptionTransaction,
  SubscriptionTransactionSchema,
};
