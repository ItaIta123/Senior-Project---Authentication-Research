import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // delete info from local storage
    localStorage.removeItem("user");

    // update global state
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
