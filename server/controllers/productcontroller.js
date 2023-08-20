const productlistscreater = require("../models/productlists");
const reviewcreater = require("../models/reviews");
const productList = async (req, res) => {
  try {
    const productlist = await productlistscreater.find();
    res.json(productlist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
};

const productListById = async (req, res) => {
  try {
    const productlist = await productlistscreater.findById(req.params.id);
    res.json(productlist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
};

const addReview = async (req, res) => {
  try {
    console.log(req.body);
    const data = await reviewcreater.insertMany([
      {
        productid: req.body.productid,
        name: req.body.name,
        rating: req.body.rating,
        description: req.body.description,
      },
    ]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
};

const reviewList = async (req, res) => {
  try {
    const reviewlist = await reviewcreater.find({ productid: req.params.id });
    res.json(reviewlist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
};

module.exports = {
  productList,
  productListById,
  addReview,
  reviewList,
};
