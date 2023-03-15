const bcrypt = require('bcrypt');

const { User } = require('../../models');
const { HttpError } = require('../../utils');

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw new HttpError(409, 'Email is already in use');

  const hashPswrd = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPswrd });
  console.log('req.body:', req.body);
  console.log('newUser:', newUser);

  res.status(201).json({
    [name]: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = signup;
