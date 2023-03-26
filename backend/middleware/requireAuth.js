const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // check for token
  const jwt_token = authorization.split(" ")[1];

  try {
    const _id = jwt.verify(jwt_token, process.env.JWT_SECRET);

    req.user = await UserModel.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ error: "Authorization token is not verified" });
  }
};

module.exports = { requireAuth };
