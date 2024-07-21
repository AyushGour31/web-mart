const express = require('express');
const router = express.Router();
const { 
    isUserLoggedIn,
    isDeveloperLoggedIn
} = require('../../middlewares/authentication');
const { getMusic } = require('../../controllers/featuresController');

/* GET home page. */
router.get('/', [ isUserLoggedIn, isDeveloperLoggedIn ], getMusic);

module.exports = router;
