import { useEffect, useState } from "react";

import { WorkoutDetails } from "../components/WorkoutDetails.js";

import { WorkoutForm } from "../components/WorkoutForm.js";

export const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const workoutsJson = await response.json();

      if (response.ok) {
        setWorkouts(workoutsJson);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};
