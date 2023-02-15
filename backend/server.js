require("dotenv").config(); // config() attached all env vars to the process object
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutsRoutes");
const userRoutes = require("./routes/userRoutes");

// express app
const app = express();

// middleware
app.use(express.json()); // automatically parse data in incoming post reqs as JSON
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000");
    });
  })
  .catch((err) => console.log(err));
