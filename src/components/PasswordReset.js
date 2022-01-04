import React from "react";
import {Col, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Userfront from "@userfront/react";

Userfront.init("jb747qn6");

const PasswordResetForm = Userfront.build({
  toolId: "lobndm",
});

function PasswordReset() {
  return (
    <div>
      <h2 className="center">Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

export default PasswordReset;
