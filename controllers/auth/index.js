const { ctrlWrapper } = require('../../utils');
const getCurrent = require('./getCurrent');
const signup = require('./signup');
const signin = require('./signin');
const logout = require('./logout');
const changeSubStatus = require('./changeSubStatus');
const changeAvatar = require('./changeAvatar');
const verifyEmail = require('./verifyEmail');
const resendEmail = require('./resendEmail');

const authCtrls = {
  getCurrent: ctrlWrapper(getCurrent),
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
  logout: ctrlWrapper(logout),
  changeSubStatus: ctrlWrapper(changeSubStatus),
  changeAvatar: ctrlWrapper(changeAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendEmail: ctrlWrapper(resendEmail),
};

module.exports = authCtrls;
