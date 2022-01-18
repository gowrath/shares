import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";

export default function App() {
  return (
    <Router>
      <div className="bg-white">
        <h1 className="center">ShareSub, Inc.</h1>

        <div>
          <p className="center">Your service for all things sharing.</p>
          <br />
        </div>

        <HeaderNav />


      </div>
    </Router>
  );
}
