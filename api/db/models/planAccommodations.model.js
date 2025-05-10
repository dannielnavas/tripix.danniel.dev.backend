const PLAN_ACCOMMODATIONS_TABLE = 'plan_accommodations';

const PlanAccommodationSchema = {
  accommodationId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'accommodation_id',
  },
  planId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'plan_id',
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'name',
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'address',
  },
  checkInDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'check_in_date',
  },
  checkOutDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'check_out_date',
  },
  pricePerNight: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'price_per_night',
  },
  totalCost: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'total_cost',
  },
  bookingConfirmation: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'booking_confirmation',
  },
  notes: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'notes',
  },
};

class PlanAccommodation extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PLAN_ACCOMMODATIONS_TABLE,
      modelName: 'PlanAccommodation',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

export {
  PLAN_ACCOMMODATIONS_TABLE,
  PlanAccommodation,
  PlanAccommodationSchema,
};
