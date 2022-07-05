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
import Chat from "./Chat";
import AddSub from "./AddSub";
import Projects from "./Projects";
import useLocalStorage2 from "../hooks/useLocalStorage2";
import EditSub from "./EditSub";
import Costs from "./Costs";
import Subscriptions from "./Subscriptions";
import Name from "./CheckboxWithLabel";
import CheckboxWithLabel from "./CheckboxWithLabel";
import ActionMovies from "./ActionMovies";

Userfront.init("jb747qn6");

const LogoutButton = Userfront.build({
  toolId: "bldord",
});

function Header() {
  const [subs, setSubs] = useLocalStorage2("subs", []);
  //const [checked, setChecked] = useLocalStorage("checked",[])
  return (
    <div>
      <ul className="navbar center">
        <li className="navbar-nav">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-nav">
          <Link to="/chat">Chat</Link>
        </li>
        <li className="navbar-nav">
          <Link to="/subscriptions">Subs</Link>
        </li>
        <li className="navbar-nav">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar-nav">
          <Link to="/costs">Costs</Link>
        </li>
        <li className="navbar-nav">
          <Link to="/actionmovies">Search</Link>
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
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/actionmovies">
          <ActionMovies />
        </Route>

        {/*         <Route path="/checkboxwithlabel">
          <CheckboxWithLabel />
        </Route> */}

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
        <Route component={() => <Redirect to="/subscriptions" />} />
      </Switch>
    </div>
  );
}

export default Header;
