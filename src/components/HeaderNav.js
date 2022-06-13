import React from "react";
import { Col, Row, Navbar, Nav } from "react-bootstrap";
import {
  //BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Userfront from "@userfront/react";
import Login from "./Login";
import PasswordReset from "./PasswordReset";
import About from "./About";
import AddSub from "./AddSub";
import Projects from "./Projects";
import useLocalStorage from "../hooks/useLocalStorage";
import EditSub from "./EditSub";
import Costs from "./Costs";
import Subscriptions from "./Subscriptions"

Userfront.init("jb747qn6");

const LogoutButton = Userfront.build({
  toolId: "bldord",
});

function Header() {
  const [subs, setSubs] = useLocalStorage("subs", []);
  return (
    <div>
      <ul className="navbar center">
      <li className="navbar-nav px-2">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-nav px-2">
          <Link to="/about">Chat</Link>
        </li>
        <li className="navbar-nav px-2">
          <Link to="/subscriptions">Subs</Link>
        </li>
        <li className="navbar-nav px-2">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar-nav px-2">
          <Link to="/costs">Costs</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/costs">
          <Costs />
        </Route>
        <Route path="/subscriptions">
          <Subscriptions />
        </Route>

        <Route path="/reset">
          <PasswordReset />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route
          render={(props) => (
            <Projects {...props} subs={subs} setSubs={setSubs} />
          )}
          path="/projects"
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
        <Route component={() => <Redirect to="/costs" />} />

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default Header;
