const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const { User } = require('../../models');
const { HttpError } = require('../../utils');

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw HttpError(409, 'Email is already in use');

  const hashPswrd = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    password: hashPswrd,
    avatarUrl,
  });

  res.status(201).json({
    [name]: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = signup;
