const Joi = require('joi');
const { regexEmail, regexPhone } = require('../../utils');

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(regexEmail).required(),
  phone: Joi.string().pattern(regexPhone).required(),
  favorite: Joi.boolean(),
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  favoriteSchema,
};

module.exports = schemas;
