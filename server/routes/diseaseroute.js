const express = require("express");
const router = express.Router();
const {
  diseaseList,
  diseaseListById,
} = require("../controllers/diseasecontroller");
const { verify } = require("../middlewares/auth");

router.get("/", verify, diseaseList);

// particular disease page route get method
// using params
router.get("/:id", verify, diseaseListById);

module.exports = router;
