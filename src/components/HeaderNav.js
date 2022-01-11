import React from "react";
import {Col, Row} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Userfront from "@userfront/react";
import Login from './Login';
import Home from './Home';
import PasswordReset from './PasswordReset';
import Dashboard from './Dashboard';
import Subs from './Subscriptions';

Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa"
});

const LoginForm = Userfront.build({
  toolId: "nrdlan"
});

const PasswordResetForm = Userfront.build({
  toolId: "lobndm"
});

const LogoutButton = Userfront.build({
  toolId: "bldord"
});


function Header(){
  return (
    <div>
    <Container>
    <Row>
        <Col>
        <Link to="/">Home</Link>
        </Col>
        <Col>
        <Link to="/subs">Subs</Link>
        </Col>
        <Col>
        <Link to="/login">Login / Sign Up</Link>
        </Col>
        <Col>
        <Link to="/reset">Reset</Link>
        </Col>
        <Col>
        <Link to="/dashboard">Dashboard</Link>
        </Col>
        <Col>
        <div id="logout-button">
        <LogoutButton />
        </div>
        </Col>
    </Row>  
    </Container>



    <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/reset">
      <PasswordReset />
    </Route>
    <Route path="/subs">
      <Subs />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
    <Route path="/logout">
      <LogoutButton />
    </Route>
    <Route path="/">
      <Home />
    </Route>



    </Switch>

    </div>



  );

}

export default Header;
