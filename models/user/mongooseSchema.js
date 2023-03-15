const { Schema, model } = require('mongoose');
const { regexEmail, handleMongooseError, subEnum } = require('../../utils');

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      match: regexEmail,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subEnum,
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);
const User = model('user', userSchema);

module.exports = User;
