const { Contact } = require('../../models');
const { HttpError } = require('../../utils');

const updateFavorite = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) throw HttpError(404, 'Not found');
  res.json(result);
};

module.exports = updateFavorite;
