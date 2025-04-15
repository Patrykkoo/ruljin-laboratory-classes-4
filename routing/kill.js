const express = require("express");
const router = express.Router();

const { killAplication } = require("../controllers/logoutController");

router.get("/", killAplication);

module.exports = router;
