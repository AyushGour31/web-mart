const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../../middlewares/authentication");
const { getMovies } = require("../../controllers/featuresController");

/* GET home page. */
router.get("/", isLoggedIn, getMovies);

module.exports = router;
