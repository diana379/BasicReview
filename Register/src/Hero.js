import React from "react";
import NB from "./NavBar";
import "./navbar.css";

const Hero = ({ handleLogOut }) => {
  return (
    <div>
      <NB />
      <button className="LogOut" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default Hero;
