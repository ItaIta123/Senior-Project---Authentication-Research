import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

import { PassageUser } from "@passageidentity/passage-elements/passage-user";

export function usePassage() {
  const { dispatch } = useAuthContext();

  const [result, setResult] = useState({
    isLoading: true,
    isAuthorized: false,
    username: "",
  });

  useEffect(() => {
    console.log("in");

    let cancelRequest = false;
    try {
      new PassageUser().userInfo().then((userInfo) => {
        if (cancelRequest) return;

        if (userInfo === undefined) {
          setResult({
            isLoading: false,
            isAuthorized: false,
            username: "",
          });
          return;
        }
        setResult({
          isLoading: false,
          isAuthorized: true,
          username: userInfo.email ? userInfo.email : userInfo.phone,
        });
        // need to save to local storage because context provider data is gone while refreshing
        localStorage.setItem("user", userInfo);

        dispatch({ type: "LOGIN", payload: userInfo });
        console.log("loggedin");
      });
    } catch (err) {
      console.log(err);
    }

    return () => {
      cancelRequest = true;
    };
  }, []);

  return result;
}
