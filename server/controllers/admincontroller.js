const creater = require("../models/users");
const productlistscreater = require("../models/productlists");
const diseaselistscreater = require("../models/diseaselists");
const doctorcreater = require("../models/doctors");
const { v4: uuidv4 } = require("uuid");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRETKEY,
});

const users = async (req, res) => {
  const data = await creater.find({ admin: { $ne: true } }); // finding user by email
  const userinfo = [];
  data.forEach((ele) => {
    userinfo.push({
      id: ele._id,
      fname: ele.fname,
      lname: ele.lname,
      email: ele.email,
      allow: ele.allow,
    });
  });
  console.log(userinfo);
  res.json(userinfo);
};

const block = async (req, res) => {
  try {
    const result = await creater.findByIdAndUpdate(
      req.body.id,
      {
        allow: false,
      },
      { new: true }
    );
    console.log(result);
    res.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const unblock = async (req, res) => {
  try {
    const result = await creater.findByIdAndUpdate(
      req.body.id,
      {
        allow: true,
      },
      { new: true }
    );
    console.log(result);
    res.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const addproduct = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body);

    const { name, price, desc, rating } = req.body;
    const upload_cloudinary = await cloudinary.uploader.upload(req.file.path, {
      public_id: uuidv4(),
    });

    const data = await productlistscreater.insertMany([
      {
        name: name,
        price: price,
        desc: desc,
        rating: rating,
        url: upload_cloudinary.secure_url,
      },
    ]);
    res.json(data[0]);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const updateproductimage = async (req, res) => {
  try {
    const upload_cloudinary = await cloudinary.uploader.upload(req.file.path, {
      public_id: uuidv4(),
    });

    const data = await productlistscreater.findByIdAndUpdate(
      req.body.id,
      {
        url: upload_cloudinary.secure_url,
      },
      { new: true }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const updateproductdetails = async (req, res) => {
  try {
    const data = await productlistscreater.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const productDeleteById = async (req, res) => {
  try {
    console.log(req.body);
    const chk = await productlistscreater.findByIdAndDelete(req.body.id, {
      new: true,
    });
    console.log(chk);
    res.json(chk._id);
  } catch (error) {
    console.log(error);
    res.status(401).send("couldn't delete");
  }
};

const adddisease = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body);

    const { name, symptoms, cure } = req.body;
    const upload_cloudinary = await cloudinary.uploader.upload(req.file.path, {
      public_id: uuidv4(),
    });

    const data = await diseaselistscreater.insertMany([
      {
        name: name,
        symptoms: symptoms,
        cure: cure,
        url: upload_cloudinary.secure_url,
      },
    ]);
    res.status(201).json(data[0]);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const updatediseaseimage = async (req, res) => {
  try {
    const upload_cloudinary = await cloudinary.uploader.upload(req.file.path, {
      public_id: uuidv4(),
    });

    const data = await diseaselistscreater.findByIdAndUpdate(
      req.body.id,
      {
        url: upload_cloudinary.secure_url,
      },
      { new: true }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const updatediseasedetails = async (req, res) => {
  try {
    const data = await diseaselistscreater.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const diseaseDeleteById = async (req, res) => {
  try {
    console.log(req.body);
    const chk = await diseaselistscreater.findByIdAndDelete(req.body.id, {
      new: true,
    });
    console.log(chk);
    res.json(chk._id);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const approveDoctorById = async (req, res) => {
  try {
    const data = await doctorcreater.findByIdAndUpdate(
      req.body.id,
      {
        isapproved: true,
      },
      { new: true }
    );
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const deleteDoctorById = async (req, res) => {
  try {
    const data = await doctorcreater.findByIdAndDelete(req.body.id, {
      new: true,
    });
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

module.exports = {
  users,
  block,
  unblock,
  addproduct,
  productDeleteById,
  updateproductimage,
  updateproductdetails,
  adddisease,
  diseaseDeleteById,
  updatediseaseimage,
  updatediseasedetails,
  approveDoctorById,
  deleteDoctorById,
};
