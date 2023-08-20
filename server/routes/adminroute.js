const express = require("express");
const router = express.Router();
const {
  users,
  block,
  unblock,
  addproduct,
  productDeleteById,
  updateproductimage,
  updateproductdetails,
  adddisease,
  updatediseaseimage,
  updatediseasedetails,
  diseaseDeleteById,
  approveDoctorById,
  deleteDoctorById,
} = require("../controllers/admincontroller");
const { verify } = require("../middlewares/auth");
const { uploadimage } = require("../middlewares/fileupload");

router.get("/users", verify, users);

router.post("/block", verify, block);

router.post("/unblock", verify, unblock);

router.post(
  "/addproduct",
  verify,
  uploadimage.single("img_upload"),
  addproduct
);

router.put(
  "/updateproductimg",
  verify,
  uploadimage.single("new_img_upload"),
  updateproductimage
);
router.put("/updateproduct/:id", verify, updateproductdetails);
router.delete("/deleteproduct", verify, productDeleteById);

router.post(
  "/adddisease",
  verify,
  uploadimage.single("img_upload"),
  adddisease
);

router.put(
  "/updatediseaseimg",
  verify,
  uploadimage.single("new_img_upload"),
  updatediseaseimage
);
router.put("/updatedisease/:id", verify, updatediseasedetails);
router.delete("/deletedisease", verify, diseaseDeleteById);

router.put("/approve", approveDoctorById);
router.delete("/deletedoctor", deleteDoctorById);

module.exports = router;
