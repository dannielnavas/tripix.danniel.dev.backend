const TOKEN_HISTORY_TABLE = 'token_history';

const TokenHistorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'id',
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
  },
  tokensUsed: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'tokens_used',
  },
  planId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'plan_id',
  },
  operationType: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'operation_type',
  },
};

class TokenHistory extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TOKEN_HISTORY_TABLE,
      modelName: 'TokenHistory',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

export { TOKEN_HISTORY_TABLE, TokenHistory, TokenHistorySchema };
