import Joi from 'joi';

const history_id = Joi.number().integer();
const user_id = Joi.number().integer();
const tokens_used = Joi.number().integer().min(0);
const plan_id = Joi.number().integer();
const operation_type = Joi.string().min(3);

const createTokenHistorySchema = Joi.object({
  user_id: user_id.required(),
  tokens_used: tokens_used.required(),
  plan_id: plan_id.required(),
  operation_type: operation_type.required(),
});

const updateTokenHistorySchema = Joi.object({
  tokens_used: tokens_used,
});

const getTokenHistorySchema = Joi.object({
  history_id: history_id.required(),
});

export {
  createTokenHistorySchema,
  getTokenHistorySchema,
  updateTokenHistorySchema,
};
