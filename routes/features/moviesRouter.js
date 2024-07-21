const express = require('express');
const router = express.Router();
const {
  isUserLoggedIn,
  isDeveloperLoggedIn,
} = require('../../middlewares/authentication');
const { getMovies } = require('../../controllers/featuresController');

/* GET home page. */
router.get('/', [ isUserLoggedIn, isDeveloperLoggedIn ], getMovies);

module.exports = router;
