const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  logout,
  refresh,
  updateuser,
  signupotp,
} = require("../controllers/authcontroller");
const { verify } = require("../middlewares/auth");

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

router.post("/refresh", refresh);

router.put("/updateuser", verify, updateuser);
router.post("/otp", signupotp);
module.exports = router;
