const PLAN_ACTIVITIES_TABLE = 'plan_activities';

const PlanActivitySchema = {
  activityId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'activity_id',
  },
  planId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'plan_id',
  },
  activityType: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'activity_type',
  },
  activityName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'activity_name',
  },
  activityDescription: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'activity_description',
  },
  activityLocation: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'activity_location',
  },
};

class PlanActivity extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PLAN_ACTIVITIES_TABLE,
      modelName: 'PlanActivity',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

export { PLAN_ACTIVITIES_TABLE, PlanActivity, PlanActivitySchema };
