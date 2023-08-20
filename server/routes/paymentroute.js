const express = require("express");
const router = express.Router();
const {
  checkoutform,
  confirmorder,
} = require("../controllers/paymentcontroller");

router.post("/checkout", checkoutform);
router.post("/confirm", confirmorder);
module.exports = router;
