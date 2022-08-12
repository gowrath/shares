import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";

export default function App() {
  return (
    <Router>
      <div
        style={{
<<<<<<< HEAD
=======
          backgroundColor: "00643A",
>>>>>>> 05a3ca737978b03585fad626fcfa5e216d252b18
          height: "1200px",
        }}
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
