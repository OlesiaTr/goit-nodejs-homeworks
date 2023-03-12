const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { regexEmail, regexPhone, handleMongooseError } = require('../utils');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      match: regexEmail,
      required: [true, 'Set email for contact'],
    },
    phone: {
      type: String,
      match: regexPhone,
      required: [true, 'Set phone number for contact'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

contactSchema.post('save', handleMongooseError);

const Contact = model('contact', contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(regexPhone).required(),
  favorite: Joi.boolean(),
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { Contact, addSchema, favoriteSchema };
