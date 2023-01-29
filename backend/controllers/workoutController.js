const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workout
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 }); // get all workouts docs by descending order

  res.status(200).json(workouts);
};

// get a single workout
const getAWorkout = async (req, res) => {
  const { id } = req.params;

  // change ID type to a type required by mongoose
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "id type does not match" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  // success
  res.status(200).json(workout);
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // Add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// delete a workout

// update a workout

module.exports = {
  createWorkout,
  getAllWorkouts,
  getAWorkout,
};
