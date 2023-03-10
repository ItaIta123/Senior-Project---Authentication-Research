const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createJWT = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// LOGIN user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);

    // create JWT
    const token = createJWT(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// SIGNUP user

const signupUser = async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.signup(email, password);

    // create JWT
    const token = createJWT(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { loginUser, signupUser };
