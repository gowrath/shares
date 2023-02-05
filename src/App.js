import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Button from "react-bootstrap/Button";

export default function App() {




  return (
    <Router>
      <div className="dark-mode"
      >
        <h1 className="center">ShareSub</h1>

      


        <div>
          <p className="center">A fullstack application</p>
        </div>
        <HeaderNav />
      </div>
    </Router>
  );
}
