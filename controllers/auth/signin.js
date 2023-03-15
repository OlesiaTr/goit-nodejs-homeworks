const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError } = require('../../utils');

const { SECRET_KEY } = process.env;

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, 'Email or password was wrong');

  const pswrdCompare = await bcrypt.compare(password, user.password);
  if (!pswrdCompare) throw HttpError(401, 'The password was wrong');

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  await User.findByIdAndUpdate(user._id, { token });
  console.log('user:', req.body);
  res.status(200).json({
    token,
    [user.name]: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = signin;
