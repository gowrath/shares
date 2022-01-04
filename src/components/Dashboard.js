import React from "react";
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Userfront from "@userfront/react";

Userfront.init("jb747qn6");

/* const SignupForm = Userfront.build({
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


function Dashboard() {
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
}

export default Dashboard;
