const express = require('express');
const { validateBody, authenticator } = require('../../middlewares/');
const { userJoi } = require('../../models');
const { authCtrls } = require('../../controllers');

const router = express.Router();

router.get('/current', authenticator, authCtrls.getCurrent);

router.post('/signup', validateBody(userJoi.singUpSchema), authCtrls.signup);

router.post('/signin', validateBody(userJoi.signInSchema), authCtrls.signin);

router.post('/logout', authenticator, authCtrls.logout);

module.exports = router;
