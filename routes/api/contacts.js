const express = require('express');
const contactsCtrl = require('../../controllers/contacts');
const { validateBody } = require('../../middlewares/');
const schemas = require('../../shemas/contacts');

const router = express.Router();

router.get('/', contactsCtrl.getAll);

router.get('/:contactId', contactsCtrl.getById);

router.post('/', validateBody(schemas.addSchema), contactsCtrl.addContact);

router.delete('/:contactId', contactsCtrl.deleteContact);

router.put(
  '/:contactId',
  validateBody(schemas.addSchema),
  contactsCtrl.updateContact
);

module.exports = router;
