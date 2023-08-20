const ordercreater = require("../models/order");

const myorder = async (req, res) => {
  try {
    const data = await ordercreater.find({ email: req.query.email }); // finding user by email
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { myorder };
