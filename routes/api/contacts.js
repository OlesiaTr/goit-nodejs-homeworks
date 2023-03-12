const express = require('express');
const contactsCtrl = require('../../controllers/contacts');
const { validateBody, isValidId } = require('../../middlewares/');
const { addSchema, favoriteSchema } = require('../../models/contact');

const router = express.Router();

router.get('/', contactsCtrl.getAll);

router.get('/:contactId', isValidId, contactsCtrl.getById);

router.post('/', validateBody(addSchema), contactsCtrl.addContact);

router.delete('/:contactId', isValidId, contactsCtrl.deleteContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(addSchema),
  contactsCtrl.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(favoriteSchema),
  contactsCtrl.updateFavorite
);

module.exports = router;
