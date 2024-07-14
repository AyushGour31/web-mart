const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../../middlewares/authentication');
const { getMusic } = require('../../controllers/featuresController');

/* GET home page. */
router.get('/', isLoggedIn, getMusic);

module.exports = router;
