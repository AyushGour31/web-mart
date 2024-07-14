const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../../middlewares/authentication');
const { getApps } = require('../../controllers/featuresController');

/* GET home page. */
router.get('/', isLoggedIn, getApps);

module.exports = router;
