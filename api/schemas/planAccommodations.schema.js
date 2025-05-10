import Joi from 'joi';

const accommodation_id = Joi.number().integer();
const plan_id = Joi.number().integer();
const name = Joi.string().min(3);
const address = Joi.string().min(3);
const check_in_date = Joi.date();
const check_out_date = Joi.date();
const price_per_night = Joi.number().integer().min(0);
const total_cost = Joi.number().integer().min(0);
const booking_confirmation = Joi.string().min(3);
const notes = Joi.string().min(10);
const created_at = Joi.date();

const createPlanAccommodationSchema = Joi.object({
  plan_id: plan_id.required(),
  name: name.required(),
  address: address.required(),
  check_in_date: check_in_date.required(),
  check_out_date: check_out_date.required(),
  price_per_night: price_per_night.required(),
  total_cost: total_cost.required(),
  booking_confirmation: booking_confirmation.required(),
  notes: notes.required(),
});

const updatePlanAccommodationSchema = Joi.object({
  name: name,
  address: address,
  check_in_date: check_in_date,
  check_out_date: check_out_date,
  price_per_night: price_per_night,
  total_cost: total_cost,
  booking_confirmation: booking_confirmation,
  notes: notes,
});

const getPlanAccommodationSchema = Joi.object({
  accommodation_id: accommodation_id.required(),
});

export {
  createPlanAccommodationSchema,
  getPlanAccommodationSchema,
  updatePlanAccommodationSchema,
};
