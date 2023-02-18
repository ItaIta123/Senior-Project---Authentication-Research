import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export const NavBar = () => {
  const { logout } = useLogout();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <button onClick={() => logout()}>Log out</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
