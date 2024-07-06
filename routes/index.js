const express = require("express");
const router = express.Router();
const { getHome, getRegister } = require("../controllers/registerController");

/* GET home page. */
router.get("/", getHome);

router.get("/register", getRegister);

module.exports = router;
