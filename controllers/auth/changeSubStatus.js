const { User } = require('../../models');
const { HttpError } = require('../../utils');

const changeSubStatus = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: subscription,
  });
  if (!user) throw HttpError(404);
  console.log('user:', user);

  res.json(user);
};

module.exports = changeSubStatus;
