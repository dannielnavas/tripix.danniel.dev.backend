import Joi from 'joi';

const preference_id = Joi.number().integer();
const user_id = Joi.number().integer();
const preferred_destinations = Joi.array().items(Joi.string().min(3));
const budget_range = Joi.number().integer().min(0);
const travel_style = Joi.string().min(3);
const accommodation_preferences = Joi.string().min(3);
const activity_preferences = Joi.string().min(3);

const createUserPreferenceSchema = Joi.object({
  user_id: user_id.required(),
  preferred_destinations: preferred_destinations.required(),
  budget_range: budget_range.required(),
  travel_style: travel_style.required(),
  accommodation_preferences: accommodation_preferences.required(),
  activity_preferences: activity_preferences.required(),
});

const updateUserPreferenceSchema = Joi.object({
  preferred_destinations: preferred_destinations,
  budget_range: budget_range,
  travel_style: travel_style,
});

const getUserPreferenceSchema = Joi.object({
  preference_id: preference_id.required(),
});

export {
  createUserPreferenceSchema,
  getUserPreferenceSchema,
  updateUserPreferenceSchema,
};
