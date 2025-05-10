const VACATION_PLANS_TABLE = 'vacation_plans';

const VacationPlanSchema = {
  planId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'plan_id',
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'title',
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'description',
  },
  destination: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'destination',
  },
  duration: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'duration',
  },
  budget: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'budget',
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
  isFavorite: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'is_favorite',
    defaultValue: false,
  },
};

class VacationPlan extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: VACATION_PLANS_TABLE,
      modelName: 'VacationPlan',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

export { VACATION_PLANS_TABLE, VacationPlan, VacationPlanSchema };
