const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../../middlewares/authentication');
const { getGames } = require('../../controllers/featuresController');

/* GET home page. */
router.get('/', isLoggedIn, getGames);

module.exports = router;
