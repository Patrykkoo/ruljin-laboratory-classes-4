const express = require("express");
const router = express.Router();

const { getLogoutView } = require("../controllers/logoutController");

router.get("/", getLogoutView);

module.exports = router;
