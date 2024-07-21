const express = require('express');
const router = express.Router();
const {
  getSignUpUser,
  postSignUpUser,
  getSignInUser,
  postSignInUser,
} = require('../../controllers/registerController');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.get('/signup', getSignUpUser);
router.post('/signup', postSignUpUser);

router.get('/signin', getSignInUser);
router.post('/signin', postSignInUser);


module.exports = router;
