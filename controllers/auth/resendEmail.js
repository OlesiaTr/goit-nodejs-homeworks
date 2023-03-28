const { User } = require('../../models');
const { HttpError } = require('../../utils');
const { sendEmail } = require('../../service/email');

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, 'User with such email was not found');
  if (user.verify) throw HttpError(400, 'Verification has already been passed');

  const resentVerificationEmail = {
    to: email,
    subject: 'Re-send verification email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify your email</a>`,
  };

  sendEmail(resentVerificationEmail);

  res.json({
    message: 'Verification email sent',
  });
};

module.exports = resendEmail;
