const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const name = Joi.string().min(3);
const role = Joi.string().min(4).max(5).valid('free', 'premium', 'admin');
const token = Joi.number().integer().min(0).max(4);

const createUserSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  role: role.required(),
  tokens: token.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
