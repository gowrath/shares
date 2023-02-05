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
import Filtering from "./Filtering";
import Filtering2 from "./Filtering2";
import Search from "./Search";
import Create from "./Create";
import EditPost from "./EditPost";
import EditPost2 from "./EditPost2";
import EditPost3 from "./EditPost3";
import ShortStory from "./ShortStory";
import NewRefactor from "./NewRefactor";
import CreateRF from "./CreateRF";
import Modal from "./Modal";

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
          <Link to="/search">Search</Link>
        </li>

        <li className="navbar-nav">
          <Link to="/create">Create</Link>
        </li>

        <li className="navbar-nav">
          <Link to="/createrf">Refactored Create</Link>
        </li>

 {/*        <li className="navbar-nav">
          <Link to="/modal">Modal</Link>
        </li> */}
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

        <Route path="/search">
          <Filtering />
        </Route>
        <Route path="/actionmovies">
          <ActionMovies />
        </Route>
        <Route path="/create">
          <Create />
        </Route>

        <Route path="/createrf">
          <CreateRF />
        </Route>
        <Route path="/editpost">
          <EditPost />
        </Route>
        <Route path="/editpost2">
          <EditPost2 />
        </Route>
        <Route path="/editpost2/:id">
          <EditPost2 />
        </Route>

        <Route path="/modal">
          <Modal />
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
