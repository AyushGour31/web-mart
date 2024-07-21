const express = require('express');
const router = express.Router();
const {
  isUserLoggedIn,
  isDeveloperLoggedIn,
} = require('../../middlewares/authentication');
const { getGames } = require('../../controllers/featuresController');

/* GET home page. */
router.get('/', [ isUserLoggedIn, isDeveloperLoggedIn ], getGames);

module.exports = router;
