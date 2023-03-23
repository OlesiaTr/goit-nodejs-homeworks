const Joi = require('joi');
const { regexEmail, subEnum } = require('../../utils');

const singUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(regexEmail).required(),
  password: Joi.string().min(6).required(),
});

const signInSchema = Joi.object({
  email: Joi.string().pattern(regexEmail).required(),
  password: Joi.string().min(6).required(),
});

const changeSubStatusSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subEnum)
    .required(),
});

const schemas = {
  singUpSchema,
  signInSchema,
  changeSubStatusSchema,
};

module.exports = schemas;
