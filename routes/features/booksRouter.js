const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../../middlewares/authentication");
const { getBooks } = require("../../controllers/featuresController");

/* GET home page. */
router.get("/", isLoggedIn, getBooks);

module.exports = router;
