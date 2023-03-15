const Contact = require('./mongooseSchema');
const { addSchema, favoriteSchema } = require('./joiSchema');

const contactsModel = { Contact, addSchema, favoriteSchema };

module.exports = contactsModel;
