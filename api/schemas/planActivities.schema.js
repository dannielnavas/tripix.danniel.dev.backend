import Joi from 'joi';

const activity_id = Joi.number().integer();
const plan_id = Joi.number().integer();
const day_number = Joi.number().integer();
const activity_name = Joi.string().min(3);
const description = Joi.string().min(10);
const location = Joi.string().min(3);
const start_time = Joi.date();
const end_time = Joi.date();
const cost = Joi.number().integer().min(0);
const notes = Joi.string().min(10);
const created_at = Joi.date();

const createPlanActivitySchema = Joi.object({
  plan_id: plan_id.required(),
  day_number: day_number.required(),
  activity_name: activity_name.required(),
  description: description.required(),
  location: location.required(),
  start_time: start_time.required(),
  end_time: end_time.required(),
  cost: cost.required(),
  notes: notes.required(),
  created_at: created_at.required(),
});

const updatePlanActivitySchema = Joi.object({
  activity_name: activity_name,
  description: description,
  location: location,
  start_time: start_time,
  end_time: end_time,
  cost: cost,
  notes: notes,
});

const getPlanActivitySchema = Joi.object({
  activity_id: activity_id.required(),
});

export {
  createPlanActivitySchema,
  getPlanActivitySchema,
  updatePlanActivitySchema,
};
