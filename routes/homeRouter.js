const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/authentication');
const { getHome } = require('../controllers/featuresController');
const {
  getRegister,
  getSignout,
} = require('../controllers/registerController');

/* GET home page. */
router.get('/', isLoggedIn, getHome);

router.get('/register', getRegister);
router.get('/logout', getSignout);

module.exports = router;
