import Joi from 'joi';

const user_id = Joi.number().integer();
const google_id = Joi.string();
const email = Joi.string();
const full_name = Joi.string();
const profile_picture = Joi.string();
const role = Joi.string();
const subscription_plan_id = Joi.number().integer();
const tokens_remaining = Joi.number().integer();
const tokens_reset_date = Joi.date();

const createUserPreferenceSchema = Joi.object({
  user_id: user_id.required(),
  google_id: google_id.required(),
  email: email.required(),
  full_name: full_name.required(),
  profile_picture: profile_picture.required(),
  role: role.required(),
  subscription_plan_id: subscription_plan_id.required(),
  tokens_remaining: tokens_remaining.required(),
  tokens_reset_date: tokens_reset_date.required(),
});

const updateUserPreferenceSchema = Joi.object({
  user_id: user_id.required(),
  subscription_plan_id: subscription_plan_id.required(),
  tokens_remaining: tokens_remaining.required(),
  tokens_reset_date: tokens_reset_date.required(),
  created_at: created_at.required(),
  updated_at: updated_at.required(),
});

const getUserPreferenceSchema = Joi.object({
  user_id: user_id.required(),
});

export {
  createUserPreferenceSchema,
  getUserPreferenceSchema,
  updateUserPreferenceSchema,
};
