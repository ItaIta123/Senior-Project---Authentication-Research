import { useAuthContext } from "./useAuthContext";
import { Passage } from "@passageidentity/passage-js";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    // delete info from local storage
    const passage = new Passage("YOUR_APP_ID");
    const session = passage.getCurrentSession();
    const signOut = await session.signOut();

    localStorage.removeItem("user");

    // update global state
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
