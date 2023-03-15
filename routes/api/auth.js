const express = require('express');
const { validateBody } = require('../../middlewares/');
const { userJoi } = require('../../models');
const { authCtrls } = require('../../controllers');

const router = express.Router();

router.get('/current', authCtrls.getCurrent);

router.post('/signup', validateBody(userJoi.singUpSchema), authCtrls.signup);

router.post('/signin', authCtrls.signin);

router.post('/logout', authCtrls.logout);

module.exports = router;
