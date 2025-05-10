const USER_PREFERENCES_TABLE = 'user_preferences';

const UserPreferenceSchema = {
  preferenceId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'preference_id',
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
  },
  preferredDestinations: {
    allowNull: false,
    type: DataTypes.ARRAY(DataTypes.STRING),
    field: 'preferred_destinations',
  },
  budgetRange: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'budget_range',
  },
  travelStyle: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'travel_style',
  },
  accommodationPreferences: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'accommodation_preferences',
  },
  activityPreferences: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'activity_preferences',
  },
};

class UserPreference extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_PREFERENCES_TABLE,
      modelName: 'UserPreference',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

export { USER_PREFERENCES_TABLE, UserPreference, UserPreferenceSchema };
