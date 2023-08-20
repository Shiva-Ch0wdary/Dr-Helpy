const doctorcreater = require("../models/doctors");
const { v4: uuidv4 } = require("uuid");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRETKEY,
});

const getUnApprovedDoctorList = async (req, res) => {
  const doctorlist = await doctorcreater.find({ isapproved: false }, null, {
    sort: { name: 1 },
  });
  res.json(doctorlist);
};

const getApprovedDoctorList = async (req, res) => {
  const doctorlist = await doctorcreater.find({ isapproved: true }, null, {
    sort: { name: 1 },
  });
  res.json(doctorlist);
};

const registerDoctor = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body);

    const {
      name,
      registrationno,
      email,
      phno,
      DOR,
      type,
      workarea,
      facebook,
      instagram,
      twitter,
    } = req.body;

    const upload_cloudinary = await cloudinary.uploader.upload(req.file.path, {
      public_id: uuidv4(),
    });

    const data = await doctorcreater.insertMany([
      {
        name,
        registrationno,
        email,
        phno,
        DOR,
        type,
        workarea,
        facebook,
        instagram,
        twitter,
        url: upload_cloudinary.secure_url,
      },
    ]);
    res.status(201).json(data[0]);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};
module.exports = {
  getUnApprovedDoctorList,
  getApprovedDoctorList,
  registerDoctor,
};
