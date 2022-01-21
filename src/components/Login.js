import React from "react";
import Userfront from "@userfront/react";

Userfront.init("jb747qn6");

/* const SignupForm = Userfront.build({
  toolId: "rlnkoa"
}); */

const SignupForm = Userfront.build({
  toolId: "rlnkoa",
});

const LoginForm = Userfront.build({
  toolId: "nrdlan",
});

/* const PasswordResetForm = Userfront.build({
  toolId: "lobndm",
});

const LogoutButton = Userfront.build({
  toolId: "bldord"
}); */

function Login() {
  return (
    <div>
      <h2 className="center">Login</h2>
      <LoginForm />
      <br></br>
      <br></br>
      <h2 className="center">Sign Up</h2>
      <SignupForm />
    </div>
  );
}

export default Login;
