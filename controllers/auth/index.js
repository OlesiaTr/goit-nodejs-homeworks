const { ctrlWrapper } = require('../../utils');
const getCurrent = require('./getCurrent');
const signup = require('./signup');
const signin = require('./signin');
const logout = require('./logout');
const changeSubStatus = require('./changeSubStatus');
const verifyEmail = require('./verifyEmail');
const changeAvatar = require('./changeAvatar');


const authCtrls = {
  getCurrent: ctrlWrapper(getCurrent),
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
  logout: ctrlWrapper(logout),
  changeSubStatus: ctrlWrapper(changeSubStatus),
  verifyEmail: ctrlWrapper(verifyEmail),
  changeAvatar: ctrlWrapper(changeAvatar),
};

module.exports = authCtrls;
