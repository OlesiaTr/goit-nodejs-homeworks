const { Contact } = require('../../models');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  const filteredPrms =
    (favorite !== undefined && favorite !== true) ||
    (favorite !== undefined && favorite !== false)
      ? { owner, favorite }
      : { owner };

  res.json(
    await Contact.find(filteredPrms, '-createdAt -updatedAt -__v', {
      skip,
      limit,
    }).populate('owner', 'name email')
  );
};

module.exports = getAll;
