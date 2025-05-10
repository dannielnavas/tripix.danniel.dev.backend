import Joi from 'joi';

const transaction_id = Joi.number().integer();
const user_id = Joi.number().integer();
const subscription_plan_id = Joi.number().integer();
const amount = Joi.number().integer().min(0);
const payment_method = Joi.string().min(3);
const payment_status = Joi.string().min(3);
const start_date = Joi.date();
const end_date = Joi.date();

const createSubscriptionTransactionSchema = Joi.object({
  user_id: user_id.required(),
  subscription_plan_id: subscription_plan_id.required(),
  amount: amount.required(),
  payment_method: payment_method.required(),
  payment_status: payment_status.required(),
  start_date: start_date.required(),
  end_date: end_date.required(),
});

const updateSubscriptionTransactionSchema = Joi.object({
  amount: amount,
  subscription_plan_id: subscription_plan_id,
  payment_method: payment_method,
  payment_status: payment_status,
  start_date: start_date,
  end_date: end_date,
});

const getSubscriptionTransactionSchema = Joi.object({
  transaction_id: transaction_id.required(),
});

export {
  createSubscriptionTransactionSchema,
  getSubscriptionTransactionSchema,
  updateSubscriptionTransactionSchema,
};
