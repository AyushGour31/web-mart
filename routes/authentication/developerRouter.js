const express = require('express');
const router = express.Router();
const {
  getSignUpDeveloper,
  postSignUpDeveloper,
  getSignInDeveloper,
  postSignInDeveloper,
} = require('../../controllers/registerController');
const {
  getAddItems,
  postAddItems,
} = require('../../controllers/featuresController');

/* GET developers listing. */
router.get('/', function (req, res) {
  res.send('Developers Details');
});


router.get('/add-items', getAddItems);
router.post('/add-items', postAddItems);

router.get('/signup', getSignUpDeveloper);
router.post('/signup', postSignUpDeveloper);

router.get('/signin', getSignInDeveloper);
router.post('/signin', postSignInDeveloper);


module.exports = router;
