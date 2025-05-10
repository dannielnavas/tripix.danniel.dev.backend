import Joi from 'joi';

const plan_id = Joi.number().integer();
const user_id = Joi.number().integer();
const title = Joi.string().min(3);
const description = Joi.string().min(10);
const destination = Joi.string().min(3);
const duration = Joi.number().integer().min(0);
const budget = Joi.number().integer().min(0);
const start_date = Joi.date();
const end_date = Joi.date();
const is_favorite = Joi.boolean();

const createVacationPlanSchema = Joi.object({
  user_id: user_id.required(),
  title: title.required(),
  description: description.required(),
  destination: destination.required(),
  duration: duration.required(),
  budget: budget.required(),
  start_date: start_date.required(),
  end_date: end_date.required(),
  is_favorite: is_favorite.required(),
});

const updateVacationPlanSchema = Joi.object({
  title: title,
  description: description,
  destination: destination,
  duration: duration,
  budget: budget,
  start_date: start_date,
  end_date: end_date,
  is_favorite: is_favorite,
});

const getVacationPlanSchema = Joi.object({
  plan_id: plan_id.required(),
});

export {
  createVacationPlanSchema,
  getVacationPlanSchema,
  updateVacationPlanSchema,
};
