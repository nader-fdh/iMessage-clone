import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSKky8GtGfYqhk4lW18-h4Yfl3dyKlFjltQ&usqp=CAU"
          alt="logo"
        />
        <h6>#Fadhel Nader</h6>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
