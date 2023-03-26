const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { v4: uuidv4 } = require('uuid');

const { User } = require('../../models');
const { HttpError, sendEmail } = require('../../utils');

const { BASE_URL } = process.env;

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw HttpError(409, 'Email is already in use');

  const hashPswrd = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = uuidv4();

  console.log(uuidv4);
  console.log(BASE_URL);
  console.log(verificationToken);

  const newUser = await User.create({
    ...req.body,
    password: hashPswrd,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: 'Verify Email Confirmation',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify your email</a>`,
  };

  sendEmail(verifyEmail);

  res.status(201).json({
    [name]: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = signup;
