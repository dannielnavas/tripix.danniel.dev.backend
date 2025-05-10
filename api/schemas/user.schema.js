import Joi from 'joi';

const user_id = Joi.number().integer();
const google_id = Joi.string();
const email = Joi.string().email();
const full_name = Joi.string().min(3);
const profile_picture = Joi.string();
const role = Joi.string().min(4).max(5).valid('free', 'premium', 'admin');
const subscription_plan_id = Joi.number().integer();
const tokens_remaining = Joi.number().integer().min(0);
const tokens_reset_date = Joi.date();

const createUserSchema = Joi.object({
  google_id: google_id.required(),
  email: email.required(),
  full_name: full_name.required(),
  profile_picture: profile_picture.required(),
  role: role.required(),
  subscription_plan_id: subscription_plan_id.required(),
  tokens_remaining: tokens_remaining.required(),
  tokens_reset_date: tokens_reset_date.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  full_name: full_name,
  profile_picture: profile_picture,
  role: role,
  subscription_plan_id: subscription_plan_id,
  tokens_remaining: tokens_remaining,
  tokens_reset_date: tokens_reset_date,
});

const getUserSchema = Joi.object({
  user_id: user_id.required(),
});

export { createUserSchema, getUserSchema, updateUserSchema };
