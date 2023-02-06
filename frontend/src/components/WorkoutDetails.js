import { useWorkoutContext } from "../hooks/useWorkoutContext";

export const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleClickDelete = async (e) => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json._id });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>

      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClickDelete}>Delete</span>
    </div>
  );
};
