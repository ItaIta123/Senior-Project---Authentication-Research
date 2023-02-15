const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// LOGIN route
router.post("/", loginUser);

// SIGNUP route
router.post("/signup", signupUser);

module.exports = router;
