const UserModel = require("../models/userModel");

// LOGIN user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);

    res.status(200).json({ email, user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// SIGNUP user

const signupUser = async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await UserModel.signup(email, password);

    res.status(200).json({ email, user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { loginUser, signupUser };
