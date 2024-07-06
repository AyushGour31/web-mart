const express = require("express");
const router = express.Router();
const {
  getSignUpUser,
  postSignUpUser,
  getSignInUser,
  postSignInUser,
  getSignOutUser,
} = require("../controllers/registerController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/signup", getSignUpUser);
router.post("/signup", postSignUpUser);

router.get("/signin", getSignInUser);
router.post("/signin", postSignInUser);

router.get("/signout", getSignOutUser);

module.exports = router;
