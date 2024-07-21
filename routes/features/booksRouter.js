const express = require('express');
const router = express.Router();
const {
    isUserLoggedIn,
    isDeveloperLoggedIn
} = require('../../middlewares/authentication');
const { getBooks } = require('../../controllers/featuresController');

/* GET home page. */
router.get('/', [ isUserLoggedIn, isDeveloperLoggedIn ], getBooks);

module.exports = router;
