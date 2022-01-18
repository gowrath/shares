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
import AddSub from './AddSub';
import SubsList from './SubsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditSub from './EditSub';


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

  const [subs, setSubs] = useLocalStorage('subs', []);
  return (
    <div>
    <Container>
    <Row>
        <Col>
        <Link to="/subslist">Home</Link>
        </Col>
        <Col>
        <Link to="/subs">About</Link>
        </Col>
        <Col>
        <Link to="/login">Login</Link>
        </Col>
        <Col>
        <Link to="/reset">Reset</Link>
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



    <Route
      render={(props) => (
        <SubsList {...props} subs={subs} setSubs={setSubs} />
    )}
    path="/home"
    />


    <Route
      render={(props) => (
        <AddSub {...props} subs={subs} setSubs={setSubs} />
    )}
    path="/addsub"
    />

    <Route
      render={(props) => (
        <EditSub {...props} subs={subs} setSubs={setSubs} />
      )}
      path="/edit/:id"
    />
    <Route component={() => <Redirect to="/home" />} />

    <Route path="/dashboard">
      <Dashboard />
    </Route>
    <Route path="/logout">
      <LogoutButton />
    </Route>
    <Route path="/home">
      <Home />
    </Route>



    </Switch>

    </div>



  );

}

export default Header;
