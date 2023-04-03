import React, { useState } from "react";
import { usePassage } from "../hooks/usePassage";

import "@passageidentity/passage-elements/passage-auth";

export const Login = () => {
  const { isLoading, isAuthorized, username } = usePassage();
  console.log(isLoading, isAuthorized, username);

  return (
    <div>
      Login
      <passage-auth
        app-id={process.env.REACT_APP_PASSAGE_APP_ID}
      ></passage-auth>
    </div>
  );
};
