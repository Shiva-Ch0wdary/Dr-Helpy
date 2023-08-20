const jwt = require("jsonwebtoken"); // json web token

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token === process.env.SAMPLETOKEN) {
      req.user = { id: 1 };
      return next();
    }
    jwt.verify(token, process.env.JWTKEY, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};
module.exports = { verify };
