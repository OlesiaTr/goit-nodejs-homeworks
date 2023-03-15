const express = require('express');
const contactsCtrl = require('../../controllers/');
const { validateBody, isValidId } = require('../../middlewares/');
const { contactJoi } = require('../../models');

const router = express.Router();

router.get('/', contactsCtrl.getAll);

router.get('/:contactId', isValidId, contactsCtrl.getById);

router.post('/', validateBody(contactJoi.addSchema), contactsCtrl.addContact);

router.delete('/:contactId', isValidId, contactsCtrl.deleteContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(contactJoi.addSchema),
  contactsCtrl.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(contactJoi.favoriteSchema),
  contactsCtrl.updateFavorite
);

module.exports = router;
