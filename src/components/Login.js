import React from "react";
import {Col, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Userfront from "@userfront/react";

Userfront.init("jb747qn6");

/* const SignupForm = Userfront.build({
  toolId: "rlnkoa"
}); */

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
    </div>
  );
}

export default Login;
