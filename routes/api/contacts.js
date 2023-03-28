const express = require('express');
const { contactsCtrls } = require('../../controllers/');
const {
  validateBody,
  isValidId,
  authenticator,
} = require('../../middlewares/');
const { contactJoi } = require('../../models');

const router = express.Router();

router.get('/', authenticator, contactsCtrls.getAll);

router.get('/:contactId', authenticator, isValidId, contactsCtrls.getById);

router.post(
  '/',
  authenticator,
  validateBody(contactJoi.addSchema),
  contactsCtrls.addContact
);

router.delete(
  '/:contactId',
  authenticator,
  isValidId,
  contactsCtrls.deleteContact
);

router.put(
  '/:contactId',
  authenticator,
  isValidId,
  validateBody(contactJoi.addSchema),
  contactsCtrls.updateContact
);

router.patch(
  '/:contactId/favorite',
  authenticator,
  isValidId,
  validateBody(contactJoi.favoriteSchema),
  contactsCtrls.updateFavorite
);

module.exports = router;
