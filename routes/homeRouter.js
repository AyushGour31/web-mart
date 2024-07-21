const express = require('express');
const router = express.Router();
const {
  isUserLoggedIn,
  isDeveloperLoggedIn
 } = require('../middlewares/authentication');
const { getHome } = require('../controllers/featuresController');
const {
  getRegister,
  getSignout,
} = require('../controllers/registerController');

/* GET home page. */
router.get('/', [ isUserLoggedIn, isDeveloperLoggedIn ], getHome);

router.get('/register', getRegister);
router.get('/logout', getSignout);

module.exports = router;
