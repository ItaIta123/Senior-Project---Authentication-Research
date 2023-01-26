require("dotenv").config(); // config() attached all env vars to the process object
const express = require("express");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json()); // automatically parse data in post reqs as JSON
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
