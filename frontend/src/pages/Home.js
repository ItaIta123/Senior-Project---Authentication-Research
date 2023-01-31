import { useEffect, useState } from "react";

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
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};
