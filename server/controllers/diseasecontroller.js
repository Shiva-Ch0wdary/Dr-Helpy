const diseaselistscreater = require("../models/diseaselists");

const diseaseList = async (req, res) => {
  const diseaselist = await diseaselistscreater.find({}, null, {
    sort: { name: 1 },
  });
  res.json(diseaselist);
};

const diseaseListById = async (req, res) => {
  const singleDisease = await diseaselistscreater.findById(req.params.id);
  res.json(singleDisease);
};

module.exports = {
  diseaseList,
  diseaseListById,
};
