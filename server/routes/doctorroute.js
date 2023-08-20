const express = require("express");
const router = express.Router();
const { uploadimage } = require("../middlewares/fileupload");
const {
  getApprovedDoctorList,
  getUnApprovedDoctorList,
  registerDoctor,
} = require("../controllers/doctorcontroller");
const { verify } = require("../middlewares/auth");

router.get("/approved", getApprovedDoctorList);
router.post(
  "/registerdoctor",
  uploadimage.single("doctor_img"),
  registerDoctor
);
router.get("/unapproved", getUnApprovedDoctorList);

module.exports = router;
