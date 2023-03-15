const { ctrlWrapper } = require('../../utils');
const getCurrent = require('./getCurrent');
const signup = require('./signup');
const signin = require('./signin');
const logout = require('./logout');

const authCtrls = {
  getCurrent: ctrlWrapper(getCurrent),
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
  logout: ctrlWrapper(logout),
};

module.exports = authCtrls;
