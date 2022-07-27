import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from ".//components//Dashboard//index";

function App() {

  return (
    <div className="container">
      <div className="navbar_container">
        <Navbar />
      </div>
     <div>
        <Dashboard />
     </div>
    </div>
  );
}

export default App;
