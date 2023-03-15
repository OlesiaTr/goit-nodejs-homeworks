const express = require('express');
const { contactsCtrls } = require('../../controllers/');
const { validateBody, isValidId } = require('../../middlewares/');
const { contactJoi } = require('../../models');

const router = express.Router();

router.get('/', contactsCtrls.getAll);

router.get('/:contactId', isValidId, contactsCtrls.getById);

router.post('/', validateBody(contactJoi.addSchema), contactsCtrls.addContact);

router.delete('/:contactId', isValidId, contactsCtrls.deleteContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(contactJoi.addSchema),
  contactsCtrls.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(contactJoi.favoriteSchema),
  contactsCtrls.updateFavorite
);

module.exports = router;
