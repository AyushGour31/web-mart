const express = require("express");
const router = express.Router();
const {
  getSignUpDeveloper,
  postSignUpDeveloper,
  getSignInDeveloper,
  postSignInDeveloper,
  getSignOutDeveloper,
} = require("../controllers/registerController");

/* GET developers listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

router.get("/signup", getSignUpDeveloper);
router.post("/signup", postSignUpDeveloper);

router.get("/signin", getSignInDeveloper);
router.post("/signin", postSignInDeveloper);

router.get("/signout", getSignOutDeveloper);

module.exports = router;
