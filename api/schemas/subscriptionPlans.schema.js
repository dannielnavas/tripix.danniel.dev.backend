import Joi from 'joi';

const plan_id = Joi.number().integer();
const plan_name = Joi.string().min(3);
const description = Joi.string().min(10);
const monthly_price = Joi.number().integer().min(0);
const tokens_per_month = Joi.number().integer().min(0);
const is_active = Joi.boolean();

const createSubscriptionPlanSchema = Joi.object({
  plan_name: plan_name.required(),
  description: description.required(),
  monthly_price: monthly_price.required(),
  tokens_per_month: tokens_per_month.required(),
  is_active: is_active.required(),
});

const updateSubscriptionPlanSchema = Joi.object({
  plan_name: plan_name,
  description: description,
  monthly_price: monthly_price,
  tokens_per_month: tokens_per_month,
  is_active: is_active,
});

const getSubscriptionPlanSchema = Joi.object({
  plan_id: plan_id.required(),
});

export {
  createSubscriptionPlanSchema,
  getSubscriptionPlanSchema,
  updateSubscriptionPlanSchema,
};
