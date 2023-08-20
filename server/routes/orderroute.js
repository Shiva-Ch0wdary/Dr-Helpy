const express = require("express");
const router = express.Router();
const { myorder } = require("../controllers/ordercontroller");
const { verify } = require("../middlewares/auth");

router.get("/orders", verify, myorder);

module.exports = router;
