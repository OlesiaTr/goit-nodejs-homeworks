const express = require('express');
const { validateBody, authenticator, upload } = require('../../middlewares/');
const { userJoi } = require('../../models');
const { authCtrls } = require('../../controllers');

const router = express.Router();

router.get('/current', authenticator, authCtrls.getCurrent);

router.post('/signup', validateBody(userJoi.singUpSchema), authCtrls.signup);

router.post('/signin', validateBody(userJoi.signInSchema), authCtrls.signin);

router.post('/logout', authenticator, authCtrls.logout);

router.patch(
  '/',
  authenticator,
  validateBody(userJoi.changeSubStatusSchema),
  authCtrls.changeSubStatus
);

router.patch(
  '/avatars',
  authenticator,
  upload.single('avatar'),
  authCtrls.changeAvatar
);

module.exports = router;
