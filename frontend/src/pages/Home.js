import { useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { WorkoutDetails } from "../components/WorkoutDetails.js";
import { WorkoutForm } from "../components/WorkoutForm.js";
import { useAuthContext } from "../hooks/useAuthContext";

export const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const workoutsJson = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: workoutsJson });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);
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
