const express = require('express');
const router = express.Router();
const {
    isUserLoggedIn,
    isDeveloperLoggedIn
} = require('../../middlewares/authentication');
const { getApps } = require('../../controllers/featuresController');

/* GET home page. */
router.get('/', [ isUserLoggedIn, isDeveloperLoggedIn ], getApps);

module.exports = router;
