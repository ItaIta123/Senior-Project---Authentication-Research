const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw new Error("All fields must be filled!");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email address");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is too weak");
  }

  // check if user already exists
  const emailTaken = await this.findOne({ email: email });

  if (emailTaken) {
    throw new Error("Email already in use");
  }

  // save user to data base
  const salt = await bcrypt.genSalt(11);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email: email, password: hash });

  return user;
};

// model automatically creates a collection of "Workouts" and let us interact with this collection
module.exports = mongoose.model("User", userSchema);
