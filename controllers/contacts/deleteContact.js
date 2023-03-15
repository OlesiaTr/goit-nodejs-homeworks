const { Contact } = require('../../models/');
const { HttpError } = require('../../utils/');

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) throw HttpError(404, 'Not found');
  res.status(200).json({
    message: 'Deleted successfully',
  });
};

module.exports = deleteContact;
