const express = require('express');
const verifyIfUserLoggedIn = require('../Auth/UserLogInAuth');
const randomFunction = require('../Controllers/RandomController/randomConroller');
const router = express.Router();

router.use(verifyIfUserLoggedIn);
router.get('/random', randomFunction);

module.exports = router;
