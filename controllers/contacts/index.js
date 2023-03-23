const { ctrlWrapper } = require('../../utils');
const getAll = require('./getAll');
const getById = require('./getById');
const addContact = require('./addContact');
const deleteContact = require('./deleteContact');
const updateContact = require('./updateContact');
const updateFavorite = require('./updateFavorite');

const contactsCtrls = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};

module.exports = contactsCtrls;
