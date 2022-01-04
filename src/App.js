import React from 'react';
//import React, { useState } from 'react';
//import Todo from "./components/Todo";
//import Form from "./components/Form";
//import FilterButton from "./components/FilterButton";
//import { nanoid } from "nanoid";

//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { BrowserRouter as Router} from "react-router-dom";

import HeaderNav from './components/HeaderNav';

/* Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa"
});

const LoginForm = Userfront.build({
  toolId: "nrdlan",
});

const PasswordResetForm = Userfront.build({
  toolId: "lobndm",
});

const LogoutButton = Userfront.build({
  toolId: "bldord"
}); */

/* class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: !Userfront.accessToken(),
    };
    // ...
  }
  // ...
  render() {
    return (
      <button
        id="logout-button"
        onClick={this.handleClick}
        disabled={this.state.disabled}
      >
        Log out
      </button>
    );
  }
} */




export default function App() {
  return (
    <Router>
      <div className="initial-padding">

      <h1 className="center">ShareSub, Inc.</h1>

      <div>
        <p className="center"> 
          Your service for all things sharing.
        </p>
        <br />
      </div>

      <HeaderNav />
      
  {/*         <Container>
          <Row>
              <Col>
              <Link to="/">Home</Link>
              </Col>
              <Col>
              <Link to="/login">Login</Link>
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
          </Container> */}








      </div>



    </Router>

);
}



/* function Home() {
  return (
    <div>
    <h2 className="center">Home</h2>
    <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
    <h2 className="center">Login</h2>
    <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <h2 className="center">Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
} */

/* function Dashboard() {
  return <h2 className="center">Dashboard</h2>;
} */


/* function Dashboard() {
  function renderFn({ location }) {
    // If the user is not logged in, redirect to login
    if (!Userfront.accessToken()) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      );
    }

    // If the user is logged in, show the dashboard
    const userData = JSON.stringify(Userfront.user, null, 2);
    return (
      <div>
        <h2>Dashboard</h2>
        <pre>{userData}</pre>
        
      </div>
    );
  }

  return <Route render={renderFn} />;
} */


/* function Logout() {
  return (
    <div className="logout-button">
      <LogoutButton />
    </div>
  );
} */






/* 




function Dapp() {
  return (
    <div className="initial-padding">
      <h1 className="center">ShareSub, Inc.</h1>

      <div>
        <p className="center"> 
          Your service for all things sharing.
        </p>
      </div>

      <div class="container">

          <div>
            <a href="https://google.com">Friends
            </a>
          </div>
          <div>
          <a href="https://google.com">Subscriptions
            </a>
          </div>
          <div>
          <a href="https://google.com">Annualized Cost
            </a>
          </div>
        
      </div>


    </div>



  );
}
 */







/* const FILTER_MAP = {
  All: ()=>true,
  Active:task=>!task.completed,
  Completed:task=>task.completed
};
 */
//const FILTER_NAMES = Object.keys(FILTER_MAP);





