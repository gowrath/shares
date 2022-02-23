import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";

export default function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: '00643A',
          height: "1200px",
        }}
      >


        <h1 className="center">Hi, I'm John</h1>

        <div>
          <p className="center">A frontend developer</p>
          <br />
        </div>
        <HeaderNav />
      </div>
    </Router>
  );
}
