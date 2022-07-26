import React from "react";
import "./App.css";
import Users from "./components/Dashboard/Users/index";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <div className="navbar_container">
        <Navbar />
      </div>
      <div className="dashboard__container">
        <div className="dashboard__user">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default App;
